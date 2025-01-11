import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReleaseData } from '../data/release.data';
import { GetReleaseDataModel } from '../release-get/get-release.data-model';
import { GetReleasesRequestDto } from './search-releases.request-dto';
import { GetReleasesResponseDto } from './search-releases.response-dto';

export class GetReleasesDataModel implements DataModel {
  public limit = 10;
  public offset = 0;
  public name!: string;

  public toRequestDTO(): GetReleasesRequestDto {
    return {
      batch: {
        limit: this.limit,
        offset: this.offset,
      },
      name: this.name
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ReleaseData[] {
    const dto = responseData as GetReleasesResponseDto;
    const model = new GetReleaseDataModel();
    return dto?.map((releaseDto) => model.getDataFromResponseDTO(releaseDto)) || [];
  }
}
