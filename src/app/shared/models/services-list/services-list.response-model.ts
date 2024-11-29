import { ServiceResponseModel } from "../service/service.response-model";

export type ServicesListResponseModel = {
  readonly services: ServiceResponseModel[];
}
