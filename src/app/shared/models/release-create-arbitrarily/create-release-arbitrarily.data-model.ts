import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { RawRequirementData } from '../data/raw-requirement.data';
import { ReleaseData } from '../data/release.data';
import { GetReleaseDataModel } from '../release-get/get-release.data-model';
import { CreateReleaseArbitrarilyRequestDto } from './create-release-arbitrarily.request-dto';
import { CreateReleaseArbitrarilyResponseDto } from './create-release-arbitrarily.response-dto';

export class CreateReleaseArbitrarilyDataModel implements DataModel {
  public serviceId!: string;
  public name!: string;
  public semanticVersion!: string;
  public requirements!: RawRequirementData[];

  public toRequestDTO(): CreateReleaseArbitrarilyRequestDto {
    return {
      requirements: this.requirements,
      service_id: this.serviceId,
      name: this.name,
      semantic_version: this.semanticVersion,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ReleaseData {
    const dto = responseData as CreateReleaseArbitrarilyResponseDto;
    const model = new GetReleaseDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
