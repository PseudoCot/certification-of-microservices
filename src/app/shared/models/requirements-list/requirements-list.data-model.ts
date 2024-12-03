import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { RequirementDataModel } from '../requirement/requirement.data-model';
import { RequirementsListRequestModel } from './requirements-list.request-model';
import { RequirementsListResponseModel } from './requirements-list.response-model';

export class RequirementsListDataModel implements DataModel {
  public requirements!: readonly RequirementDataModel[];

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as RequirementsListResponseModel;
    this.requirements = dto.requirements.map((requirementDto) => new RequirementDataModel(requirementDto));
  }

  public toDTO(): RequirementsListRequestModel {
    return {
      requirements: this.requirements.map((requirementData) => requirementData.toDTO()),
    }
  }
}
