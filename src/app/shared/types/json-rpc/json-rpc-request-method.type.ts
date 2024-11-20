import { ApiMethods } from '../../consts';
import { ValueOf } from '../value-of.type';

export type JsonRpcRequestMethod = ValueOf<typeof ApiMethods>;
