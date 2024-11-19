import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginPage } from '../auth-login/auth-login.page';
import { AuthRegisterPage } from '../auth-register/auth-register.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Auth.Children.Login.Path,
    title: AppRoutes.Auth.Children.Login.Title,
    component: AuthLoginPage,
  },
  {
    path: AppRoutes.Auth.Children.Register.Path,
    title: AppRoutes.Auth.Children.Register.Title,
    component: AuthRegisterPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Auth.Children.Login.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
