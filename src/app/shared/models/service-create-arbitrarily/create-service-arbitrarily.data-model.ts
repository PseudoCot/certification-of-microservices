import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { RawRequirementData } from '../data/raw-requirement.data';
import { ServiceData } from '../data/service.data';
import { GetServiceDataModel } from '../service-get/get-service.data-model';
import { CreateServiceArbitrarilyRequestDto } from './create-service-arbitrarily.request-dto';
import { CreateServiceArbitrarilyResponseDto } from './create-service-arbitrarily.response-dto';

export class CreateServiceArbitrarilyDataModel implements DataModel {
  public name!: string;
  public description!: string;
  public requirements!: RawRequirementData[];

  public toRequestDTO(): CreateServiceArbitrarilyRequestDto {
    return {
      service: {
        name: this.name,
        description: this.description,
        requirements: this.requirements
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ServiceData {
    const dto = responseData as CreateServiceArbitrarilyResponseDto;
    const model = new GetServiceDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
