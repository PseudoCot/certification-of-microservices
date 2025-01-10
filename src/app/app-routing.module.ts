import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './shared/utils/guards/auth.guard';
import { AppRoutes } from './shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Auth.Path,
    title: AppRoutes.Auth.Title,
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: AppRoutes.User.Path,
    title: AppRoutes.User.Title,
    loadChildren: () =>
      import('./user/feature/user.module').then(
        (m) => m.UserModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: AppRoutes.Services.Path,
    title: AppRoutes.Services.Title,
    loadChildren: () =>
      import('./services/feature/services-shell/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: AppRoutes.Requirements.Path,
    title: AppRoutes.Requirements.Title,
    loadChildren: () =>
      import('./services/feature/services-shell/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.Services.Path,
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
