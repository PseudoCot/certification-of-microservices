import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReleaseDataModel } from '../release/release.data-model';
import { ReleasesListRequestModel } from './releases-list.request-model';
import { ReleasesListResponseModel } from './releases-list.response-model';

export class ReleasesListDataModel implements DataModel {
  public releases!: ReleaseDataModel[];

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReleasesListResponseModel;
    this.releases = dto.releases?.map((releaseDto) => new ReleaseDataModel(releaseDto)) || [];
  }

  public toDTO(): ReleasesListRequestModel {
    return {
      releases: this.releases?.map((releaseData) => releaseData.toDTO()) || [],
    }
  }
}
