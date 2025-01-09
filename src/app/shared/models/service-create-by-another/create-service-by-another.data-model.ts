import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ServiceData } from '../data/service.data';
import { GetServiceDataModel } from '../service-get/get-service.data-model';
import { CreateServiceByAnotherRequestDto } from './create-service-by-another.request-dto';
import { CreateServiceByAnotherResponseDto } from './create-service-by-another.response-dto';

export class CreateServiceByAnotherDataModel implements DataModel {
  public name!: string;
  public description!: string;
  public serviceId!: string;

  public toRequestDTO(): CreateServiceByAnotherRequestDto {
    return {
      service: {
        name: this.name,
        description: this.description,
        service_id: this.serviceId
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ServiceData {
    const dto = responseData as CreateServiceByAnotherResponseDto;
    const model = new GetServiceDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
