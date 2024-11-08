import { ContentTypes } from "../consts";
import { ValueOf } from "./value-of.type";

export type ContentType = ValueOf<typeof ContentTypes>;
