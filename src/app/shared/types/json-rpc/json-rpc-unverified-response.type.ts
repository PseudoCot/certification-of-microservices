import { JsonRpcErrorData } from './json-rpc-error-data.type';

export type JsonRpcUnverifiedResponce<ResponseData> = {
  jsonrpc: string;
  id: string | number;
  result?: ResponseData;
  error?: JsonRpcErrorData;
};
