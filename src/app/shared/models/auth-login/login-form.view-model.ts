import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDataModel } from './login.data-model';

export class LoginFormViewModel {
  public form: FormGroup = new FormGroup({
    firstFactor: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): LoginDataModel {
    const result = new LoginDataModel();
    result.firstFactor = this.form.get('firstFactor')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
