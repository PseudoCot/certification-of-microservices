import { JsonValue } from "../../types/http/json-value.type";

export type DataModel = {
  toDTO?: () => JsonValue;
  fromDTO?: (dto: JsonValue) => void;
}
