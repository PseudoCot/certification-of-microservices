import { ReleasesListRequestModel } from "../releases-list/releases-list.request-model";
import { RequirementsListRequestModel } from "../requirements-list/requirements-list.request-model";

export type ServiceRequestModel = {
  readonly id: string;
  readonly name: string;
  readonly requirements: RequirementsListRequestModel;
  readonly releases: ReleasesListRequestModel;
}
