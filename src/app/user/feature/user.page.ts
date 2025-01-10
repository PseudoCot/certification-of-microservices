import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { BehaviorSubject } from 'rxjs';
import { SvgIconComponent } from "../../shared/ui/svg-icon/svg-icon.component";
import { SubmitingModalWindowComponent } from "../../shared/ui/submiting-modal-window/submiting-modal-window.component";
import { UserService } from '../../shared/data-access/user.service';
import { GetUserDataModel } from '../../shared/models/user-get/get-user.data-model';
import { LoaderComponent } from "../../shared/ui/loader/loader.component";

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss', '../../shared/ui/card/card.component.scss', '../../shared/ui/form-input/form-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    SvgIconComponent,
    SubmitingModalWindowComponent,
    LoaderComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {
  protected form: FormGroup;

  protected editMode$ = new BehaviorSubject(false);
  protected showModal$ = new BehaviorSubject(false);


  constructor(
    private fb: FormBuilder,
    protected userService: UserService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      nickname: ['', Validators.required],
    });

    if (!userService.currentUserData$.value) {
      const model = new GetUserDataModel();
      userService.getCurrentUser(model);
    }
  }

  protected deleteUser() {
    // this.authService.login(val.email, val.password)
    //   .subscribe(() => {
    //     console.log("User is logged in");
    //     this.router.navigateByUrl('/');
    //   });
    this.showModal$.next(false);
  }

  protected saveChanges() {
    if (this.form.valid) {
      // this.authService.login(val.email, val.password)
      //   .subscribe(() => {
      //     console.log("User is logged in");
      //     this.router.navigateByUrl('/');
      //   });
      this.editMode$.next(false);
    }
  }
}
