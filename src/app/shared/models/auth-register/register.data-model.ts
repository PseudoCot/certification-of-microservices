import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { UserData } from '../data/user.data';
import { RegisterRequestDto } from './register.request-dto';
import { RegisterResponseDto } from './register.response-dto';

export class RegisterDataModel implements DataModel {
  public name!: string;
  public email!: string;
  public nickname!: string;
  public password!: string;

  public toRequestDTO(): RegisterRequestDto {
    return {
      data: {
        name: this.name,
        email: this.email,
        nickname: this.nickname,
        password: this.password,
      }
    }
  }

  public getDataFromResponseDTO(responseData: JsonValue): UserData {
    const dto = responseData as RegisterResponseDto;
    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      nickname: dto.nickname,
    };
  }
}
