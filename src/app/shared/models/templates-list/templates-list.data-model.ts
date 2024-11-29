import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { TemplateDataModel } from '../template/template.data-model';
import { TemplatesListResponseModel } from './templates-list.response-model';

export class TemplatesListDataModel implements DataModel {
  public templates!: readonly TemplateDataModel[];

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as TemplatesListResponseModel;
    this.templates = dto.templates.map((templateDto) => new TemplateDataModel(templateDto));
  }
}
