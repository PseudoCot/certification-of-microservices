import { AuthStatuses } from '../consts';
import { ValueOf } from './value-of.type';

export type AuthStatus = ValueOf<typeof AuthStatuses>;
