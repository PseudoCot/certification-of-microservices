import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';
import { RequirementRequestModel } from './requirement.request-model';
import { RequirementResponseModel } from './requirement.response-model';
import { RequirementType } from '../../types/requirement.type';

export class RequirementDataModel implements DataModel, DataItem {
  public name!: string;
  public id!: string;
  public type!: RequirementType;

  constructor(responseData: JsonValue) {
    this.fromDTO(responseData);
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as RequirementResponseModel;
    this.name = dto.name;
    this.id = dto.id;
    this.type = dto.type as RequirementType;
  }

  public toDTO(): RequirementRequestModel {
    return {
      name: this.name,
      id: this.id,
      type: this.type,
    }
  }
}
