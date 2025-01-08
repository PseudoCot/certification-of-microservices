import { JsonValue } from '../../types/http/json-value.type';
import { ServiceRequestModel } from './service.request-model';
import { ServiceResponseModel } from './service.response-model';
import { RequirementsListDataModel } from '../requirements-list/requirements-list.data-model';
import { ReleasesListDataModel } from '../releases-list/releases-list.data-model';
import { DataItem } from '../../types/models/data-item.type';
import { DataModel } from '../../types/models/data-model.type';

export class ServiceDataModel implements DataModel, DataItem {
  public id!: string;
  public name!: string;
  public requirementsData!: RequirementsListDataModel;
  public releasesData!: ReleasesListDataModel;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ServiceResponseModel;
    this.id = dto.id;
    this.name = dto.name;
    this.requirementsData = new RequirementsListDataModel(dto.requirements);
    this.releasesData = new ReleasesListDataModel(dto.releases);
  }

  public toDTO(): ServiceRequestModel {
    return {
      id: this.id,
      name: this.name,
      requirements: this.requirementsData.toDTO(),
      releases: this.releasesData.toDTO(),
    }
  }
}
