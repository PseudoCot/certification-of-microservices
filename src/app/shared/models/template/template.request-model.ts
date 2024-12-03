import { RequirementsListRequestModel } from "../requirements-list/requirements-list.request-model";

export type TemplateRequestModel = {
  readonly id: string;
  readonly requirements: RequirementsListRequestModel;
}
