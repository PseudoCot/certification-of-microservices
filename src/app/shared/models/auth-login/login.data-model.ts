import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { LoginData } from '../data/login.data';
import { LoginRequestDto } from './login.request-dto';
import { LoginResponseDto } from './login.response-dto';

export class LoginDataModel implements DataModel {
  public firstFactor!: string;
  public password!: string;

  public toRequestDTO(): LoginRequestDto {
    return {
      login_data: {
        first_factor: this.firstFactor,
        password: this.password,
      }
    }
  }

  public getDataFromResponseDTO(responseDto: JsonValue): LoginData {
    const dto = responseDto as LoginResponseDto;
    return dto;
  }
}
