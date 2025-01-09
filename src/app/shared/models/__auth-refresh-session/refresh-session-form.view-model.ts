import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RefreshSessionDataModel } from './refresh-session.data-model';

export class RefreshSessionFormViewModel {
  public form: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): RefreshSessionDataModel {
    const result = new RefreshSessionDataModel();
    result.login = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
