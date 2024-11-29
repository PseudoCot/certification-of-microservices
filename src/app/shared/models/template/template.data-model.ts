import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';
import { TemplateRequestModel } from './template.request-model';
import { TemplateResponseModel } from './template.response-model';

export class TemplateDataModel implements DataModel, DataItem {
  public name!: string;
  public id!: string;
  public description!: string;
  public manager!: string;

  constructor(responseData: JsonValue) {
    this.fromDTO(responseData);
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as TemplateResponseModel;
    this.name = dto.name;
    this.id = dto.id;
    this.description = dto.description;
    this.manager = dto.manager;
  }

  public toDTO(): TemplateRequestModel {
    return {
      name: this.name,
      id: this.id,
      description: this.description,
      manager: this.manager,
    }
  }
}
