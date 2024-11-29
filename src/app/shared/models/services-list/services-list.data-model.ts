import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ServiceDataModel } from '../service/service.data-model';
import { ServicesListResponseModel } from './services-list.response-model';

export class ServicesListDataModel implements DataModel {
  public services!: readonly ServiceDataModel[];

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ServicesListResponseModel;
    this.services = dto.services.map((serviceDto) => new ServiceDataModel(serviceDto));
  }
}
