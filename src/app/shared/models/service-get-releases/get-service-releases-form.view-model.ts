import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetServiceReleasesDataModel } from './get-service-releases.data-model';

export class GetServiceReleasesFormViewModel {
  public form: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public toModel(): GetServiceReleasesDataModel {
    const result = new GetServiceReleasesDataModel();
    result.login = this.form.get('login')?.value ?? ''
    result.password = this.form.get('password')?.value ?? ''

    return result;
  }
}
