import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { RegisterFormViewModel } from '../../../shared/models/auth-register/register-form.view-model';
import { AuthService } from '../../../shared/data-access/auth.service';
import { TextLinkComponent } from "../../../shared/ui/text-link/text-link.component";

@Component({
  selector: 'app-register-page',
  templateUrl: './auth-register.page.html',
  styleUrls: [
    './auth-register.page.scss',
    '../../../shared/ui/card/card.component.scss',
    '../../../shared/ui/form-input/form-input.component.scss'
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextLinkComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRegisterPage {
  protected loginPath = 'auth/login';

  protected formModel: RegisterFormViewModel;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formModel = new RegisterFormViewModel();
  }

  protected _register() {
    if (this.formModel.form.valid) {
      const dataModel = this.formModel.toModel();

      this.authService.register(dataModel)
        .subscribe((res) => console.log(res));
    }
  }
}

