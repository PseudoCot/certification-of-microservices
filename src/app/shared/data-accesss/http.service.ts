import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { skipWhile, takeUntil, tap } from 'rxjs/operators';
import { ContentType } from '../types/content-type.type';
import { RequestResponseType } from '../types/request-response.type';
import { ContentTypes } from '../consts';
import { RequestOptions } from '../types/request-options.type';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private _takeUntil: Subject<void> = new Subject<void>();

  constructor(
    protected http: HttpClient
  ) { }

  public request<Res, Req = null>(requestParams: RequestOptions<Req>): Observable<HttpResponse<Res>> {
    const httpOptions: {
      headers?: HttpHeaders;
      reportProgress?: boolean;
      responseType?: RequestResponseType;
      withCredentials?: boolean;
    } = {
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
        tap((value: HttpResponse<Res>) => {
          if (isDevMode()) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const log: Record<string, any> = {};
            if (requestParams.method) {
              log[requestParams.method.toLowerCase()] = requestParams.url;
            }
            log['request'] = { requestParams, httpOptions };
            log['response'] = value;
            console.log(log);
          }
        }),
        takeUntil(requestParams.unsubscriber ? merge(this._takeUntil, requestParams.unsubscriber) : this._takeUntil)
      );
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

  public unsubscribeAll(): void {
    this._takeUntil.next();
  }
}
