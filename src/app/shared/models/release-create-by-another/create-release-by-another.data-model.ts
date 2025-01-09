import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReleaseData } from '../data/release.data';
import { GetReleaseDataModel } from '../release-get/get-release.data-model';
import { CreateReleaseByAnotherRequestDto } from './create-release-by-another.request-dto';
import { CreateReleaseByAnotherResponseDto } from './create-release-by-another.response-dto';

export class CreateReleaseByAnotherDataModel implements DataModel {
  public serviceId!: string;
  public name!: string;
  public semanticVersion!: string;
  public sourceReleaseId!: string;

  public toRequestDTO(): CreateReleaseByAnotherRequestDto {
    return {
      release: {
        service_id: this.serviceId,
        name: this.name,
        semantic_version: this.semanticVersion,
        source_release_id: this.sourceReleaseId
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ReleaseData {
    const dto = responseData as CreateReleaseByAnotherResponseDto;
    const model = new GetReleaseDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
