import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetServicesDataModel } from './get-services.data-model';

export class GetServicesFormViewModel {
  public form: FormGroup = new FormGroup({
    limit: new FormControl(10, Validators.required),
    offset: new FormControl(0, Validators.required)
  });

  public toModel(): GetServicesDataModel {
    const result = new GetServicesDataModel();
    result.limit = this.form.get('limit')?.value ?? ''
    result.offset = this.form.get('offset')?.value ?? ''

    return result;
  }
}
