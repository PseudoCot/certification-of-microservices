import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUserDataModel } from './update-user.data-model';

export class UpdateUserFormViewModel {
  public form: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): UpdateUserDataModel {
    const result = new UpdateUserDataModel();
    result.login = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
