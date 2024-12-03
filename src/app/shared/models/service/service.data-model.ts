import { JsonValue } from '../../types/http/json-value.type';
import { ServiceRequestModel } from './service.request-model';
import { ServiceResponseModel } from './service.response-model';
import { RequirementsListDataModel } from '../requirements-list/requirements-list.data-model';
import { ReliasesListDataModel } from '../reliases-list/reliases-list.data-model';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';

export class ServiceDataModel implements DataModel, DataItem {
  public id!: string;
  public requirements!: RequirementsListDataModel;
  public reliases!: ReliasesListDataModel;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ServiceResponseModel;
    this.id = dto.id;
    this.requirements = new RequirementsListDataModel(dto.requirements);
    this.reliases = new ReliasesListDataModel(dto.reliases);
  }

  public toDTO(): ServiceRequestModel {
    return {
      id: this.id,
      requirements: this.requirements.toDTO(),
      reliases: this.reliases.toDTO(),
    }
  }
}
