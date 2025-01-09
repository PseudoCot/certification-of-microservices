import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateReleaseArbitrarilyDataModel } from './create-release-arbitrarily.data-model';

export class CreateReleaseArbitrarilyFormViewModel {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    semanticVersion: new FormControl('', Validators.required)
  });

  public toModel(): CreateReleaseArbitrarilyDataModel {
    const result = new CreateReleaseArbitrarilyDataModel();
    result.name = this.form.get('name')?.value ?? '';
    result.semanticVersion = this.form.get('semanticVersion')?.value ?? '';

    return result;
  }
}
