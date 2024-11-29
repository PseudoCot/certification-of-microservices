import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReliaseRequestModel } from './reliase.request-model';
import { ReliaseResponseModel } from './reliase.response-model';

export class ReliaseDataModel implements DataModel, DataItem {
  public name!: string;
  public id!: string;
  public description!: string;
  public manager!: string;

  constructor(responseData: JsonValue) {
    this.fromDTO(responseData);
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReliaseResponseModel;
    this.name = dto.name;
    this.id = dto.id;
    this.description = dto.description;
    this.manager = dto.manager;
  }

  public toDTO(): ReliaseRequestModel {
    return {
      name: this.name,
      id: this.id,
      description: this.description,
      manager: this.manager,
    }
  }
}
