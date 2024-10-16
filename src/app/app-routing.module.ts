import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth.module').then(
        (m) => m.AuthPageModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/feature/user.module').then(
        (m) => m.UserPageModule
      ),
  },
  // {
  //   path: 'feedback',
  //   loadChildren: () =>
  //     import('./feedback/feature/feedback/feedback.module').then(
  //       (m) => m.FeedbackPageModule
  //     ),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
