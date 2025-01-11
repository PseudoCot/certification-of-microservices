import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ServiceData } from '../data/service.data';
import { GetServiceDataModel } from '../service-get/get-service.data-model';
import { GetServicesRequestDto } from './get-services.request-dto';
import { GetServicesResponseDto } from './get-services.response-dto';

export class GetServicesDataModel implements DataModel {
  public limit = 10;
  public offset = 0;

  public toRequestDTO(): GetServicesRequestDto {
    return {
      batch: {
        limit: this.limit,
        offset: this.offset,
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ServiceData[] {
    const dto = responseData as GetServicesResponseDto;
    const model = new GetServiceDataModel();
    return dto?.map((serviceDto) => model.getDataFromResponseDTO(serviceDto)) || [];
  }
}
