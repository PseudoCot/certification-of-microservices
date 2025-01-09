import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateServiceArbitrarilyDataModel } from './create-service-arbitrarily.data-model';

export class CreateServiceArbitrarilyFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  public toModel(): CreateServiceArbitrarilyDataModel {
    const result = new CreateServiceArbitrarilyDataModel();
    result.name = this.form.get('name')?.value ?? '';
    result.description = this.form.get('description')?.value ?? '';

    return result;
  }
}
