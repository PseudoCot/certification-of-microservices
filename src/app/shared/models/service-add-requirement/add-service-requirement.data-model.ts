import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { AddServiceRequirementRequestDto } from './add-service-requirement.request-dto';
import { AddServiceRequirementResponseDto } from './add-service-requirement.response-dto';
import { RequirementData } from '../data/requirement.data';

export class AddServiceRequirementDataModel implements DataModel {
  public name!: string;
  public value!: string;
  public serviceId!: string;

  public toRequestDTO(): AddServiceRequirementRequestDto {
    return {
      requirement: {
        name: this.name,
        value: this.value,
      },
      service_id: this.serviceId
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData {
    const dto = responseData as AddServiceRequirementResponseDto;
    const model = new GetRequirementDataModel()
    return model.getDataFromResponseDTO(dto);
  }
}
