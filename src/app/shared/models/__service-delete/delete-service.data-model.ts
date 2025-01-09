import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { DeleteServiceRequestDto } from './delete-service.request-dto';
import { DeleteServiceResponseDto } from './delete-service.response-dto';

export class DeleteServiceDataModel implements DataModel {
  public login!: string;
  public password!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): DeleteServiceRequestDto {
    return {
      login: this.login,
      password: this.password,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue) {
    const dto = responseData as DeleteServiceResponseDto;
    this.login = dto.access_token;
  }
}
