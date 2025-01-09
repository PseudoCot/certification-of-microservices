import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteServiceDataModel } from './delete-service.data-model';

export class DeleteServiceFormViewModel {
  public form: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): DeleteServiceDataModel {
    const result = new DeleteServiceDataModel();
    result.login = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
