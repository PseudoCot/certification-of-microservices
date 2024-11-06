import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './auth-login.page.html',
  styleUrl: './auth-login.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPage {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(() => {
          console.log("User is logged in");
          this.router.navigateByUrl('/');
        });
    }
  }
}
