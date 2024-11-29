import { JsonValue } from '../../types/http/json-value.type';
import { DataModel } from '../../types/models/data-model.type';
import { ReliaseDataModel } from '../reliase/reliase.data-model';
import { ReliasesListResponseModel } from './reliases-list.response-model';

export class ReliasesListDataModel implements DataModel {
  public reliases!: readonly ReliaseDataModel[];

  public fromDTO(responseData: JsonValue) {
    const dto = responseData as ReliasesListResponseModel;
    this.reliases = dto.reliases.map((reliaseDto) => new ReliaseDataModel(reliaseDto));
  }
}
