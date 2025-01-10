import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { LoginFormViewModel } from '../../../shared/models/auth-login/login-form.view-model';
import { AuthService } from '../../../shared/data-access/auth.service';
import { TextLinkComponent } from "../../../shared/ui/text-link/text-link.component";
import { ServicesService } from '../../../shared/data-access/services.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss', '../../../shared/ui/card/card.component.scss', '../../../shared/ui/form-input/form-input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextLinkComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPage {
  protected registerPath = 'auth/register';

  protected formModel: LoginFormViewModel;

  constructor(
    protected authService: AuthService,
    protected servicesService: ServicesService,
  ) {
    this.formModel = new LoginFormViewModel();
  }

  protected login() {
    if (this.formModel.form.valid) {
      const dataModel = this.formModel.toModel();

      this.authService.login(dataModel);
    }
  }
}
