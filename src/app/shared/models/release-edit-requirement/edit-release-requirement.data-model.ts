import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { RequirementData } from '../data/requirement.data';
import { EditReleaseRequirementRequestDto } from './edit-release-requirement.request-dto';
import { EditReleaseRequirementResponseDto } from './edit-release-requirement.response-dto';

export class EditReleaseRequirementDataModel implements DataModel {
  public requirementId!: string;
  public name!: string;
  public value!: string;
  // public responsibleId!: string;

  public toRequestDTO(): EditReleaseRequirementRequestDto {
    return {
      requirement_id: this.requirementId,
      name: this.name,
      value: this.value,
      // responsible_id: this.responsibleId,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData {
    const dto = responseData as EditReleaseRequirementResponseDto;
    const model = new GetRequirementDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
