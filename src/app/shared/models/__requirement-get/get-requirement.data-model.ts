import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetRequirementRequestDto } from './get-requirement.request-dto';
import { GetRequirementResponseDto } from './get-requirement.response-dto';
import { RequirementData } from '../data/requirement.data';

export class GetRequirementDataModel implements DataModel {
  public id!: string;

  public toRequestDTO(): GetRequirementRequestDto {
    return {
      id: this.id,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData {
    const dto = responseData as GetRequirementResponseDto;
    return {
      id: dto.id,
      name: dto.name,
      value: dto.value,
      responsibleId: dto.responsible_id,
    };
  }
}
