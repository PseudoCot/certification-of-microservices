import { JsonRpcErrorCode } from './json-rpc-error-code.type';

export type JsonRpcErrorData = {
  code: JsonRpcErrorCode;
  message: string;
  data?: string;
};
