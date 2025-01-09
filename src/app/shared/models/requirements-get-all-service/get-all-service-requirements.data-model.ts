import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetAllServiceRequirementsRequestDto } from './get-all-service-requirements.request-dto';
import { GetAllServiceRequirementsResponseDto } from './get-all-service-requirements.response-dto';
import { RequirementData } from '../data/requirement.data';

export class GetAllServiceRequirementsDataModel implements DataModel {
  public limit!: number;
  public offset!: number;

  public toRequestDTO(): GetAllServiceRequirementsRequestDto {
    return {
      batch: {
        limit: this.limit,
        offset: this.offset,
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData[] {
    const dto = responseData as GetAllServiceRequirementsResponseDto;
    const model = new GetRequirementDataModel();
    return dto?.map((requirementDto) => model.getDataFromResponseDTO(requirementDto)) || [];
  }
}
