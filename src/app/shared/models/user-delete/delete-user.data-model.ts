import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { DeleteUserRequestDto } from './delete-user.request-dto';
import { DeleteUserResponseDto } from './delete-user.response-dto';
import { EmptyData } from '../data/empty.data';

export class DeleteUserDataModel implements DataModel {
  public toRequestDTO(): DeleteUserRequestDto {
    return {};
  }

  public getDataFromResponseDTO(responseData: JsonValue): EmptyData {
    const dto = responseData as DeleteUserResponseDto;
    return dto;
  }
}
