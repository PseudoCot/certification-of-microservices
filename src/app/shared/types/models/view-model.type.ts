import { FormGroup } from "@angular/forms";
import { DataModel } from "./data-model.type";

export type ViewModel = {
  readonly form: FormGroup;

  toModel: () => DataModel;
  fromModel?: (dataModel: DataModel) => void;
}
