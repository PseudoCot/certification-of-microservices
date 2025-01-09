import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetAllServiceRequirementsDataModel } from './get-all-service-requirements.data-model';

export class GetAllServiceRequirementsFormViewModel {
  public form: FormGroup = new FormGroup({
    limit: new FormControl(10, Validators.required),
    offset: new FormControl(0, Validators.required),
  });

  public toModel(): GetAllServiceRequirementsDataModel {
    const result = new GetAllServiceRequirementsDataModel();
    result.limit = this.form.get('limit')?.value ?? 10;
    result.offset = this.form.get('offset')?.value ?? 0;

    return result;
  }
}
