import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { UpdateServiceRequestDto } from './update-service.request-dto';
import { UpdateServiceResponseDto } from './update-service.response-dto';

export class UpdateServiceDataModel implements DataModel {
  public login!: string;
  public password!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): UpdateServiceRequestDto {
    return {
      login: this.login,
      password: this.password,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue) {
    const dto = responseData as UpdateServiceResponseDto;
    this.login = dto.access_token;
  }
}
