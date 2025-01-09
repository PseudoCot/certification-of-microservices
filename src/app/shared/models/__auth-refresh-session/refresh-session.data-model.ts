import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { RefreshSessionRequestDto } from './refresh-session.request-dto';
import { RefreshSessionResponseDto } from './refresh-session.response-dto';

export class RefreshSessionDataModel implements DataModel {
  public login!: string;
  public password!: string;

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): RefreshSessionRequestDto {
    return {
      login: this.login,
      password: this.password,
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue) {
    const dto = responseData as RefreshSessionResponseDto;
    this.login = dto.access_token;
  }
}
