import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { RequirementDataModel } from '../requirement/requirement.data-model';
import { RequirementsListResponseModel } from './requirements-list.response-model';

export class RequirementsListDataModel implements DataModel {
  public requirements!: readonly RequirementDataModel[];

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as RequirementsListResponseModel;
    this.requirements = dto.requirements.map((requirementDto) => new RequirementDataModel(requirementDto));
  }
}
