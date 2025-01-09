import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddReleaseRequirementDataModel } from './add-release-requirement.data-model';

export class AddReleaseRequirementFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required)
  });

  public toModel(): AddReleaseRequirementDataModel {
    const result = new AddReleaseRequirementDataModel();
    result.name = this.form.get('name')?.value ?? ''
    result.value = this.form.get('value')?.value ?? ''

    return result;
  }
}
