import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { ReliaseRequestModel } from './reliase.request-model';
import { ReliaseResponseModel } from './reliase.response-model';
import { DataModel } from '../../types/models/data-model.type';
import { RequirementsListDataModel } from '../requirements-list/requirements-list.data-model';

export class ReliaseDataModel implements DataModel, DataItem {
  public id!: string;
  public order!: number;
  public requirements!: RequirementsListDataModel;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReliaseResponseModel;
    this.id = dto.id;
    this.order = dto.order;
    this.requirements = new RequirementsListDataModel(dto.requirements);
  }

  public toDTO(): ReliaseRequestModel {
    return {
      id: this.id,
      order: this.order,
      requirements: this.requirements.toDTO(),
    }
  }
}
