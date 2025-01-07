import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { from, map, merge, startWith, Subject } from 'rxjs';
import { SvgIconComponent } from "../../shared/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss', '../../shared/ui/card/card.component.scss', '../../shared/ui/form-input/form-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    SvgIconComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {
  protected _form: FormGroup;
  protected userData = { name: 'Ivan', email: 'ivan.ivanov@urfu.me', nickname: 'Ivanidze99' };

  protected deleteClick$ = new Subject<void>();

  protected editClick$ = new Subject<void>();
  protected cancelChangesClick$ = new Subject<void>();
  protected saveChangesClick$ = new Subject<void>();

  protected editMode$ = merge(
    from(this.editClick$)
      .pipe(map(() => true)),
    from(this.cancelChangesClick$)
      .pipe(map(() => false)),
    from(this.saveChangesClick$)
      .pipe(map(() => false))
  ).pipe(
    startWith(false)
  );

  constructor(
    private fb: FormBuilder,
  ) {
    this._form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      nickname: ['', Validators.required],
    });
  }

  protected _saveChanges() {
    const val = this._form.value;

    if (val.email && val.password) {
      // this.authService.login(val.email, val.password)
      //   .subscribe(() => {
      //     console.log("User is logged in");
      //     this.router.navigateByUrl('/');
      //   });
    }
  }
}
