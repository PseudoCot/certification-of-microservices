import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { GetUserRequestDto } from './get-user.request-dto';
import { GetUserResponseDto } from './get-user.response-dto';
import { UserData } from '../data/user.data';

export class GetUserDataModel implements DataModel {
  public toRequestDTO(): GetUserRequestDto {
    return {};
  }

  public getDataFromResponseDTO(responseData: JsonValue): UserData {
    const dto = responseData as GetUserResponseDto;
    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      nickname: dto.nickname,
    };
  }
}
