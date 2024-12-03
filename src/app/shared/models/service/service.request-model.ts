import { ReliasesListRequestModel } from "../reliases-list/reliases-list.request-model";
import { RequirementsListRequestModel } from "../requirements-list/requirements-list.request-model";

export type ServiceRequestModel = {
  readonly id: string;
  readonly requirements: RequirementsListRequestModel;
  readonly reliases: ReliasesListRequestModel;
}
