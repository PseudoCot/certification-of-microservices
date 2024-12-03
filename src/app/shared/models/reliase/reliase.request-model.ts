import { RequirementsListRequestModel } from "../requirements-list/requirements-list.request-model";

export type ReliaseRequestModel = {
  readonly id: string;
  readonly order: number;
  readonly requirements: RequirementsListRequestModel;
}