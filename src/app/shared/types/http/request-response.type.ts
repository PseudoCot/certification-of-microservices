import { RequestResponseTypes } from "../../consts";
import { ValueOf } from "../value-of.type";

export type RequestResponseType = ValueOf<typeof RequestResponseTypes>;
