import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateServiceByAnotherDataModel } from './create-service-by-another.data-model';

export class CreateServiceByAnotherFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  public toModel(): CreateServiceByAnotherDataModel {
    const result = new CreateServiceByAnotherDataModel();
    result.name = this.form.get('name')?.value ?? '';
    result.description = this.form.get('description')?.value ?? '';

    return result;
  }
}
