import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListPage } from '../services-list/services-list.page';
import { ServicesInfoPage } from '../services-info/services-info.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.List.Path,
    title: AppRoutes.Services.Children.List.Title,
    component: ServicesListPage,
  },
  {
    path: AppRoutes.Services.Children.Info.Path,
    title: AppRoutes.Services.Children.Info.Title,
    component: ServicesInfoPage,
  },
  {
    path: AppRoutes.Services.Children.Info.Children.Releases.Path,
    title: AppRoutes.Services.Children.Info.Children.Releases.Title,
    loadChildren: () =>
      import('../../../releases/feature/releases-shell/releases.module').then(
        (m) => m.ReleasesModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Services.Children.List.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
