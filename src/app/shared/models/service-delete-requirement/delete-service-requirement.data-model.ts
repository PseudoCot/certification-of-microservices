import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { EmptyData } from '../data/empty.data';
import { DeleteServiceRequirementRequestDto } from './delete-service-requirement.request-dto';
import { DeleteServiceRequirementResponseDto } from './delete-service-requirement.response-dto';

export class DeleteServiceRequirementDataModel implements DataModel {
  public requirementId!: string;

  public toRequestDTO(): DeleteServiceRequirementRequestDto {
    return {
      requirement_id: this.requirementId,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): EmptyData {
    const dto = responseData as DeleteServiceRequirementResponseDto;
    return dto;
  }
}
