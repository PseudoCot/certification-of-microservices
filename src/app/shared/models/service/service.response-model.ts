import { ReleasesListResponseModel } from "../releases-list/releases-list.response-model";
import { RequirementsListResponseModel } from "../requirements-list/requirements-list.response-model";

export type ServiceResponseModel = {
  readonly id: string;
  readonly name: string;
  readonly requirements: RequirementsListResponseModel;
  readonly releases: ReleasesListResponseModel;
}
