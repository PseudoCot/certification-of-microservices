import { ServiceRequestModel } from "../service/service.request-model";

export type ServicesListRequestModel = {
  readonly services: ServiceRequestModel[];
}
