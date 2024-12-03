import { RequirementsListResponseModel } from "../requirements-list/requirements-list.response-model";

export type ReliaseResponseModel = {
  readonly id: string;
  readonly order: number;
  readonly requirements: RequirementsListResponseModel;
}
