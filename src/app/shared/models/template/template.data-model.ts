import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/data-item.type';
import { DataModel } from '../../types/models/data-model.type';
import { TemplateRequestModel } from './template.request-model';
import { TemplateResponseModel } from './template.response-model';
import { RequirementsListDataModel } from '../requirements-list/requirements-list.data-model';

export class TemplateDataModel implements DataModel, DataItem {
  public id!: string;
  public requirements!: RequirementsListDataModel;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as TemplateResponseModel;
    this.id = dto.id;
    this.requirements = new RequirementsListDataModel(dto.requirements);
  }

  public toDTO(): TemplateRequestModel {
    return {
      id: this.id,
      requirements: this.requirements.toDTO(),
    }
  }
}