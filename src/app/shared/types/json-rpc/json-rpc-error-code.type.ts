import { JsonRpcErrorCodes } from '../../consts';
import { ValueOf } from '../value-of.type';

export type JsonRpcErrorCode = ValueOf<typeof JsonRpcErrorCodes>;
