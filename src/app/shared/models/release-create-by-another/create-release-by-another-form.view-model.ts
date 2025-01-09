import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateReleaseByAnotherDataModel } from './create-release-by-another.data-model';

export class CreateReleaseByAnotherFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    semanticVersion: new FormControl('', Validators.required)
  });

  public toModel(): CreateReleaseByAnotherDataModel {
    const result = new CreateReleaseByAnotherDataModel();
    result.name = this.form.get('name')?.value ?? '';
    result.semanticVersion = this.form.get('semanticVersion')?.value ?? '';

    return result;
  }
}
