import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetRequirementDataModel } from '../__requirement-get/get-requirement.data-model';
import { RequirementData } from '../data/requirement.data';
import { EditServiceRequirementRequestDto } from './edit-service-requirement.request-dto';
import { EditServiceRequirementResponseDto } from './edit-service-requirement.response-dto';

export class EditServiceRequirementDataModel implements DataModel {
  public requirementId!: string;
  public name!: string;
  public value!: string;
  public responsibleId!: string;

  public toRequestDTO(): EditServiceRequirementRequestDto {
    return {
      requirement_id: this.requirementId,
      name: this.name,
      value: this.value,
      responsible_id: this.responsibleId,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): RequirementData {
    const dto = responseData as EditServiceRequirementResponseDto;
    const model = new GetRequirementDataModel();
    return model.getDataFromResponseDTO(dto);
  }
}
