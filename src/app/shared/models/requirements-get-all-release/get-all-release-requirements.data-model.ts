import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { GetAllReleaseRequirementsRequestDto } from './get-all-release-requirements.request-dto';
import { GetAllReleaseRequirementsResponseDto } from './get-all-release-requirements.response-dto';
import { RequirementData } from '../data/requirement.data';

export class GetAllReleaseRequirementsDataModel implements DataModel {
  public limit!: number;
  public offset!: number;

  public toRequestDTO(): GetAllReleaseRequirementsRequestDto {
    return {
      batch: {
        limit: this.limit,
        offset: this.offset,
      }
    }
  }

  public static getDataFromResponseDTO(responseData: JsonValue): RequirementData[] {
    const dto = responseData as GetAllReleaseRequirementsResponseDto;
    const model = new GetRequirementDataModel();
    return dto?.map((requirementDto) => model.getDataFromResponseDTO(requirementDto)) || [];
  }
}
