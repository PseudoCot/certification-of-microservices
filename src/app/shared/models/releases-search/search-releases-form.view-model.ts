import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetReleasesDataModel } from './search-releases.data-model';

export class GetReleasesFormViewModel {
  public form: FormGroup = new FormGroup({
    limit: new FormControl(10, Validators.required),
    offset: new FormControl(0, Validators.required),
    name: new FormControl(''),
  });

  public toModel(): GetReleasesDataModel {
    const result = new GetReleasesDataModel();
    result.limit = this.form.get('limit')?.value ?? 10;
    result.offset = this.form.get('offset')?.value ?? 0;
    result.name = this.form.get('name')?.value ?? 0;

    return result;
  }
}
