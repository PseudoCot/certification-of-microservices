import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginPage } from '../auth-login/auth-login.page';
import { AuthRegisterPage } from '../auth-register/auth-register.page';

const routes: Routes = [
  {
    path: '/login',
    title: 'Вход',
    component: AuthLoginPage,
  },
  {
    path: '/register',
    title: 'Регистрация',
    component: AuthRegisterPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
