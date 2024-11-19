import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ContentType } from './content-type.type';
import { RequestMethodType } from './request-method.type';
import { RequestResponseType } from './request-response.type';

export type RequestOptions<F = null> = {
  url: string;
  method?: RequestMethodType;
  timeout?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: string | URLSearchParams | Record<string, any | any[]>;
  headers?: HttpHeaders;
  withCredentials?: boolean;
  responseType?: RequestResponseType;
  unsubscriber?: Subject<void>,
  contentType?: ContentType,
  body?: F | null;
}
