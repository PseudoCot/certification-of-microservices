import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../shared/ui/button/button.component";

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
  protected _form: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ) {
    this._form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  protected _login() {
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
