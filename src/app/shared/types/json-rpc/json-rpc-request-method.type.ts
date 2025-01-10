import { ApiRoutes } from '../../consts';
import { ValueOf } from '../value-of.type';

export type JsonRpcRequestMethod = ValueOf<typeof ApiRoutes>['Method'];
