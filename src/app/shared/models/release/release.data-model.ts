import { JsonValue } from '../../types/http/json-value.type';
import { DataItem } from '../../types/models/data-item.type';
import { ReleaseRequestModel } from './release.request-model';
import { ReleaseResponseModel } from './release.response-model';
import { DataModel } from '../../types/models/data-model.type';
import { RequirementsListDataModel } from '../requirements-list/requirements-list.data-model';

export class ReleaseDataModel implements DataModel, DataItem {
  public id!: string;
  public name!: string;
  public order!: number;
  public requirementsData!: RequirementsListDataModel;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReleaseResponseModel;
    this.id = dto.id;
    this.name = dto.name;
    this.order = dto.order;
    this.requirementsData = new RequirementsListDataModel(dto.requirements);
  }

  public toDTO(): ReleaseRequestModel {
    return {
      id: this.id,
      name: this.name,
      order: this.order,
      requirements: this.requirementsData.toDTO(),
    }
  }
}
