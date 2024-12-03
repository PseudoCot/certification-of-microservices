import { ReliasesListResponseModel } from "../reliases-list/reliases-list.response-model";
import { RequirementsListResponseModel } from "../requirements-list/requirements-list.response-model";

export type ServiceResponseModel = {
  readonly id: string;
  readonly requirements: RequirementsListResponseModel;
  readonly reliases: ReliasesListResponseModel;
}
