import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { TemplateDataModel } from '../template/template.data-model';
import { TemplatesListRequestModel } from './templates-list.request-model';
import { TemplatesListResponseModel } from './templates-list.response-model';

export class TemplatesListDataModel implements DataModel {
  public templates!: readonly TemplateDataModel[];

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as TemplatesListResponseModel;
    this.templates = dto.templates.map((templateDto) => new TemplateDataModel(templateDto));
  }

  public toDTO(): TemplatesListRequestModel {
    return {
      templates: this.templates.map((templateData) => templateData.toDTO()),
    }
  }
}
