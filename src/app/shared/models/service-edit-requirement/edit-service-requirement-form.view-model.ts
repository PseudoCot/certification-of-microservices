import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditServiceRequirementDataModel } from './edit-service-requirement.data-model';

export class EditServiceRequirementFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    responsibleId: new FormControl('', Validators.required),
  });

  public toModel(): EditServiceRequirementDataModel {
    const result = new EditServiceRequirementDataModel();
    result.name = this.form.get('name')?.value ?? ''
    result.value = this.form.get('value')?.value ?? ''
    result.responsibleId = this.form.get('responsibleId')?.value ?? ''

    return result;
  }
}
