import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetServiceRequestDto } from './get-service.request-dto';
import { GetServiceResponseDto } from './get-service.response-dto';
import { ServiceData } from '../data/service.data';

export class GetServiceDataModel implements DataModel {
  public id!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): GetServiceRequestDto {
    return {
      service_id: this.id,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): ServiceData {
    const dto = responseData as GetServiceResponseDto;
    const model = new GetRequirementDataModel();
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      confluencePageLink: dto.confluence_page_link,
      requirements: dto.requirements?.map((requirementDto) => model.getDataFromResponseDTO(requirementDto)) || [],
    }
  }
}
