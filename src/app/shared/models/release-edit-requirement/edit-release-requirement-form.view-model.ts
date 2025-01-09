import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditReleaseRequirementDataModel } from './edit-release-requirement.data-model';

export class EditReleaseRequirementFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    // responsibleId: new FormControl('', Validators.required),
  });

  public toModel(): EditReleaseRequirementDataModel {
    const result = new EditReleaseRequirementDataModel();
    result.name = this.form.get('name')?.value ?? ''
    result.value = this.form.get('value')?.value ?? ''
    // result.responsibleId = this.form.get('responsibleId')?.value ?? ''

    return result;
  }
}
