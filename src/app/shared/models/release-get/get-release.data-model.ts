import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetReleaseRequestDto } from './get-release.request-dto';
import { GetReleaseResponseDto } from './get-release.response-dto';
import { ReleaseData } from '../data/release.data';

export class GetReleaseDataModel implements DataModel {
  public id!: string;

  public toRequestDTO(): GetReleaseRequestDto {
    return {
      release_id: this.id,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ReleaseData {
    const dto = responseData as GetReleaseResponseDto;
    const model = new GetRequirementDataModel();
    return {
      id: dto.id,
      service_id: dto.service_id,
      name: dto.name,
      semanticVersion: dto.semantic_version,
      requirements: dto.requirements?.map((requirementDto) => model.getDataFromResponseDTO(requirementDto)) || [],
    }
  }
}
