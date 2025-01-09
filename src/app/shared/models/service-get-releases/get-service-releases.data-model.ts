import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReleaseData } from '../data/release.data';
import { GetReleaseDataModel } from '../release-get/get-release.data-model';
import { GetServiceReleasesRequestDto } from './get-service-releases.request-dto';
import { GetServiceReleasesResponseDto } from './get-service-releases.response-dto';

export class GetServiceReleasesDataModel implements DataModel {
  public serviceId!: string;

  public toRequestDTO(): GetServiceReleasesRequestDto {
    return {
      service_id: this.serviceId,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ReleaseData[] {
    const dto = responseData as GetServiceReleasesResponseDto;
    const model = new GetReleaseDataModel();
    return dto?.map((releaseDto) => model.getDataFromResponseDTO(releaseDto)) || [];
  }
}
