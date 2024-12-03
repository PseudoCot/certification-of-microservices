import { RequirementsListResponseModel } from "../requirements-list/requirements-list.response-model";

export type TemplateResponseModel = {
  readonly id: string;
  readonly requirements: RequirementsListResponseModel;
}
