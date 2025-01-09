import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { EmptyData } from '../data/empty.data';
import { DeleteReleaseRequirementRequestDto } from './delete-release-requirement.request-dto';
import { DeleteReleaseRequirementResponseDto } from './delete-release-requirement.response-dto';

export class DeleteReleaseRequirementDataModel implements DataModel {
  public requirementId!: string;

  public toRequestDTO(): DeleteReleaseRequirementRequestDto {
    return {
      requirement_id: this.requirementId,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): EmptyData {
    const dto = responseData as DeleteReleaseRequirementResponseDto;
    return dto;
  }
}
