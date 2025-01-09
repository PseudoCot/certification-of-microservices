import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { AddReleaseRequirementRequestDto } from './add-release-requirement.request-dto';
import { AddReleaseRequirementResponseDto } from './add-release-requirement.response-dto';
import { RequirementData } from '../data/requirement.data';

export class AddReleaseRequirementDataModel implements DataModel {
  public name!: string;
  public value!: string;
  public releaseId!: string;

  public toRequestDTO(): AddReleaseRequirementRequestDto {
    return {
      requirement: {
        name: this.name,
        value: this.value,
      },
      release_id: this.releaseId
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData {
    const dto = responseData as AddReleaseRequirementResponseDto;
    const model = new GetRequirementDataModel()
    return model.getDataFromResponseDTO(dto);
  }
}
