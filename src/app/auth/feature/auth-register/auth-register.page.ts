import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../shared/ui/button/button.component";

@Component({
  selector: 'app-register-page',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss', '../../../shared/ui/card/card.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRegisterPage {
  protected _form: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ) {
    this._form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  protected _register() {
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

