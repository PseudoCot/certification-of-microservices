import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: '/auth',
    title: 'Аутентификация',
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '/user',
    title: 'Личный кабинет',
    loadChildren: () =>
      import('./user/feature/user.module').then(
        (m) => m.UserModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '/services',
    title: 'Сервисы',
    loadChildren: () =>
      import('./services/feature/services-shell/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '/templates',
    title: 'Шаблоны',
    loadChildren: () =>
      import('./templates/feature/templates-shell/templates.module').then(
        (m) => m.TemplatesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '/requirements',
    title: 'Требования',
    loadChildren: () =>
      import('./services/feature/services-shell/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/services',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'Страница не найдена',
    loadChildren: () =>
      import('./not-found/feature/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
