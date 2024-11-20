import { HttpHeaders } from "@angular/common/http";
import { RequestResponseType } from "./request-response.type";

export type HttpOptions = {
  headers?: HttpHeaders;
  reportProgress?: boolean;
  responseType?: RequestResponseType;
  withCredentials?: boolean;
}
