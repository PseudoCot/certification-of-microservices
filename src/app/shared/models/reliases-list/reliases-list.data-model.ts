import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReliaseDataModel } from '../reliase/reliase.data-model';
import { ReliasesListRequestModel } from './reliases-list.request-model';
import { ReliasesListResponseModel } from './reliases-list.response-model';

export class ReliasesListDataModel implements DataModel {
  public reliases!: readonly ReliaseDataModel[];

  constructor(responseData?: JsonValue) {
    if (responseData) {
      this.fromDTO(responseData);
    }
  }

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReliasesListResponseModel;
    this.reliases = dto.reliases.map((reliaseDto) => new ReliaseDataModel(reliaseDto));
  }

  public toDTO(): ReliasesListRequestModel {
    return {
      reliases: this.reliases.map((reliaseData) => reliaseData.toDTO()),
    }
  }
}
