import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateServiceDataModel } from './update-service.data-model';

export class UpdateServiceFormViewModel {
  public form: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): UpdateServiceDataModel {
    const result = new UpdateServiceDataModel();
    result.login = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
