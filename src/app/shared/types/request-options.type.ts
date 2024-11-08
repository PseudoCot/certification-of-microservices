import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ContentType } from './content-type.type';
import { RequestMethodType } from './request-method.type';
import { RequestResponseType } from './request-response.type';

export type RequestOptions<F = null> = {
  url: string;
  method?: RequestMethodType;
  timeout?: number;
  params?: string | URLSearchParams | {
    [key: string]: any | any[];
  };
  headers?: HttpHeaders;
  withCredentials?: boolean;
  responseType?: RequestResponseType;
  unsubscriber?: Subject<void>,
  contentType?: ContentType,
  body?: F | null;
}
