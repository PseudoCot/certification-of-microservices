import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/feature/user.module').then(
        (m) => m.UserModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/feature/services-shell/services.module').then(
        (m) => m.ServicesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
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
