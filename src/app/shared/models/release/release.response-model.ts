import { RequirementsListResponseModel } from "../requirements-list/requirements-list.response-model";

export type ReleaseResponseModel = {
  readonly id: string;
  readonly name: string;
  readonly order: number;
  readonly requirements: RequirementsListResponseModel;
}
