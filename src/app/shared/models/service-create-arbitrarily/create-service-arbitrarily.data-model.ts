import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ServiceData } from '../data/service.data';
import { AddServiceRequirementDataModel } from '../service-add-requirement/add-service-requirement.data-model';
import { GetServiceDataModel } from '../service-get/get-service.data-model';
import { CreateServiceArbitrarilyRequestDto } from './create-service-arbitrarily.request-dto';
import { CreateServiceArbitrarilyResponseDto } from './create-service-arbitrarily.response-dto';

export class CreateServiceArbitrarilyDataModel implements DataModel {
  public name!: string;
  public description!: string;
  public requirements!: AddServiceRequirementDataModel[];

  public toRequestDTO(): CreateServiceArbitrarilyRequestDto {
    return {
      service: {
        name: this.name,
        description: this.description,
        requirements: this.requirements.map((req) => req.toRequestDTO())
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ServiceData {
    const dto = responseData as CreateServiceArbitrarilyResponseDto;
    const model = new GetServiceDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
