import { RequestOptions } from "../http/request-options.type";
import { JsonRpcRequestMethod } from "./json-rpc-request-method.type";

export type JsonRpcRequestOptions<T = null> = Omit<RequestOptions<T>, 'method' | 'responseType' | 'contentType'> & {
  jsonRpcMethod: JsonRpcRequestMethod,
};
