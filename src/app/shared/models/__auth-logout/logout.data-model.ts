import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { EmptyData } from '../data/empty.data';
import { LogoutRequestDto } from './logout.request-dto';
import { LogoutResponseDto } from './logout.response-dto';

export class LogoutDataModel implements DataModel {
  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.getDataFromResponseDTO(responseData);
    }
  }

  public toRequestDTO(): LogoutRequestDto {
    return {};
  }

  public getDataFromResponseDTO(responseData: JsonValue): EmptyData {
    const dto = responseData as LogoutResponseDto;
    return dto;
  }
}
