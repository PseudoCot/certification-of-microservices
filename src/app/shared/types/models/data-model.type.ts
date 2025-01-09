import { JsonValue } from "../../types/http/json-value.type";

export type DataModel = {
  toRequestDTO: () => JsonValue;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDataFromResponseDTO?: (responseDto: JsonValue) => any;
}
