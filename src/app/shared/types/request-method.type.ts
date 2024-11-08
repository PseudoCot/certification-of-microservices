import { RequestMethodTypes } from "../consts";
import { ValueOf } from "./value-of.type";

export type RequestMethodType = ValueOf<typeof RequestMethodTypes>;
