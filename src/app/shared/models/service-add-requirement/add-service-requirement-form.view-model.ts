import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddServiceRequirementDataModel } from './add-service-requirement.data-model';

export class AddServiceRequirementFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required)
  });

  public toModel(): AddServiceRequirementDataModel {
    const result = new AddServiceRequirementDataModel();
    result.name = this.form.get('name')?.value ?? ''
    result.value = this.form.get('value')?.value ?? ''

    return result;
  }
}
