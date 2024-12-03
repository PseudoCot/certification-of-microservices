import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { RequirementRequestModel } from './requirement.request-model';
import { RequirementResponseModel } from './requirement.response-model';
import { RequirementType } from '../../types/requirement.type';
import { DataModel } from '../../types/models/data-model.type';

export class RequirementDataModel implements DataModel, DataItem {
  public id!: string;
  public name!: string;
  public order!: number;
  public type!: RequirementType;
  public value!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as RequirementResponseModel;
    this.id = dto.id;
    this.name = dto.name;
    this.order = dto.order;
    this.type = dto.type as RequirementType;
    this.value = dto.value;
  }

  public toDTO(): RequirementRequestModel {
    return {
      id: this.id,
      name: this.name,
      order: this.order,
      type: this.type,
      value: this.value,
    }
  }
}
