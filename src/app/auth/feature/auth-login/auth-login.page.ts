import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { LoginFormViewModel } from '../../../shared/models/auth-login/login-form.view-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss', '../../../shared/ui/card/card.component.scss', '../../../shared/ui/form-input/form-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPage {
  protected formModel: LoginFormViewModel;

  constructor(
    // private authService: AuthService,
  ) {
    this.formModel = new LoginFormViewModel();
  }

  protected login() {
    const val = this.formModel.form.value;

    if (val.email && val.password) {
      // this.authService.login(val.email, val.password)
      //   .subscribe(() => {
      //     console.log("User is logged in");
      //     this.router.navigateByUrl('/');
      //   });
    }
  }
}
