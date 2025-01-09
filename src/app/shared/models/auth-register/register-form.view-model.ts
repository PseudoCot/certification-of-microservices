import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterDataModel } from './register.data-model';

export class RegisterFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): RegisterDataModel {
    const result = new RegisterDataModel();
    result.name = this.form.get('login')?.value ?? ''
    result.email = this.form.get('login')?.value ?? ''
    result.nickname = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
