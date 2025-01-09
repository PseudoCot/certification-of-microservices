import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { UpdateUserRequestDto } from './update-user.request-dto';
import { UpdateUserResponseDto } from './update-user.response-dto';

export class UpdateUserDataModel implements DataModel {
  public login!: string;
  public password!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): UpdateUserRequestDto {
    return {
      login: this.login,
      password: this.password,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue) {
    const dto = responseData as UpdateUserResponseDto;
    this.login = dto.access_token;
  }
}
