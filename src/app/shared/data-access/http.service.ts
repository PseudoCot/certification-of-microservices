import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { skipWhile, takeUntil, tap } from 'rxjs/operators';
import { ContentTypes } from '../consts';
import { RequestOptions } from '../types/http/request-options.type';
import { JsonRpcRequestOptions } from '../types/json-rpc/json-rpc-request-options.type';
import { ContentType } from '../types/http/content-type.type';
import { JsonRpcRequestMethod } from '../types/json-rpc/json-rpc-request-method.type';
import { JsonRpcRequest } from '../types/json-rpc/json-rpc-request.type';
import { v4 as uuidv4 } from 'uuid';
import { HttpOptions } from '../types/http/http-options.type';

const JSON_RPC_VERSION = '2.0'; // TODO вынести в конфиг или env

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private _takeUntil: Subject<void> = new Subject<void>();

  constructor(
    protected http: HttpClient
  ) { }

  // TODO реализовать отбрасывание запроса при таймауте, приписывание параметров, прогресс
  public request<Res, Req = null>(requestParams: RequestOptions<Req>): Observable<HttpResponse<Res>> {
    const httpOptions: HttpOptions = {
      headers: requestParams.headers || new HttpHeaders(),
      reportProgress: false,
      responseType: requestParams.responseType,
      withCredentials: requestParams.withCredentials
    };

    if (!requestParams.contentType) {
      requestParams.contentType = ContentTypes.Json;
    }

    if (httpOptions.headers && !httpOptions.headers.has('Content-Type') &&
      requestParams.contentType !== ContentTypes.MultipartFormData &&
      requestParams.contentType !== ContentTypes.TextXml) {
      httpOptions.headers = httpOptions.headers.set('Content-Type', this._convertContentType(requestParams.contentType));
    }

    if (!requestParams.method) {
      throw new Error('Не указан метод http-запроса');
    }

    if (!requestParams.body) {
      requestParams.body = null;
    }


    const request = new HttpRequest<Req>(requestParams.method, requestParams.url, requestParams.body, httpOptions);

    return (this.http.request<Res>(request) as Observable<HttpResponse<Res>>)
      .pipe(
        skipWhile((event: HttpResponse<Res>) => event.type !== HttpEventType.Response),
        tap((response: HttpResponse<Res>) => {
          if (isDevMode()) {
            this._logRequest(requestParams, httpOptions, response);
          }
        }),
        takeUntil(requestParams.unsubscriber ? merge(this._takeUntil, requestParams.unsubscriber) : this._takeUntil)
      );
  }

  public jsonRpcRequest<Res, Req = null>(requestParams: JsonRpcRequestOptions<Req>): Observable<HttpResponse<Res>> {
    const jsonRpcRequestBody = this._createJsonRpcRequestBody<Req>(requestParams.jsonRpcMethod, requestParams.body as Req);

    const jsonRpcRequestParams: RequestOptions<Req> = {
      ...requestParams,
      method: 'POST',
      responseType: 'json',
      body: jsonRpcRequestBody as Req,
    };

    return this.request(jsonRpcRequestParams);
  }

  // private _createJsonRpcRequestBody<P extends JsonRpcParams>(method: JsonRpcRequestMethod, params: P): JsonRpcRequest<P> {
  private _createJsonRpcRequestBody<P>(method: JsonRpcRequestMethod, params: P): JsonRpcRequest<P> {
    const uuid = uuidv4();

    return {
      jsonrpc: JSON_RPC_VERSION,
      id: uuid,
      method: method,
      params: params,
    };
  }

  private _convertContentType(contentType: ContentType): string {
    const m = new Map<ContentType, string>([
      [ContentTypes.Raw, ''],
      [ContentTypes.Json, 'application/json'],
      [ContentTypes.FormUrlEncoded, 'application/x-www-form-urlencoded'],
      [ContentTypes.MultipartFormData, 'multipart/form-data'],
      [ContentTypes.Text, 'text'],
      [ContentTypes.Blob, 'application/octet-stream'],
      [ContentTypes.ImageSvg, 'image/svg+xml'],
    ]);

    return m.get(contentType)!;
  }

  private _logRequest<Res, Req>(requestParams: RequestOptions<Req>, httpOptions: HttpOptions, response: HttpResponse<Res>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const log: Record<string, any> = {};
    if (requestParams.method) {
      log[requestParams.method.toLowerCase()] = requestParams.url;
    }
    log['request'] = { requestParams, httpOptions };
    log['response'] = response;
    console.log(log);
  }

  public unsubscribeAll(): void {
    this._takeUntil.next();
  }
}
