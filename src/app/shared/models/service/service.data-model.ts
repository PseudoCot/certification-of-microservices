import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';
import { ServiceRequestModel } from './service.request-model';
import { ServiceResponseModel } from './service.response-model';

export class ServiceDataModel implements DataModel, DataItem {
  public name!: string;
  public id!: string;
  public description!: string;
  public owner!: string;

  constructor(responseData: JsonValue) {
    this.fromDTO(responseData);
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ServiceResponseModel;
    this.name = dto.name;
    this.id = dto.id;
    this.description = dto.description;
    this.owner = dto.owner;
  }

  public toDTO(): ServiceRequestModel {
    return {
      name: this.name,
      id: this.id,
      description: this.description,
      owner: this.owner,
    }
  }
}
