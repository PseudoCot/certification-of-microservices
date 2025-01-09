import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetAllReleaseRequirementsDataModel } from './get-all-release-requirements.data-model';

export class GetAllReleaseRequirementsFormViewModel {
  public form: FormGroup = new FormGroup({
    limit: new FormControl(10, Validators.required),
    offset: new FormControl(0, Validators.required),
  });

  public toModel(): GetAllReleaseRequirementsDataModel {
    const result = new GetAllReleaseRequirementsDataModel();
    result.limit = this.form.get('limit')?.value ?? 10;
    result.offset = this.form.get('offset')?.value ?? 0;

    return result;
  }
}
