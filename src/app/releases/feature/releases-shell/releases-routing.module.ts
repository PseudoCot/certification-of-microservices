import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../../../shared/consts';
import { ReleasesInfoPage } from '../releases-info/releases-info.page';
import { ReleasesListPage } from '../releases-list/releases-list.page';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.Releases.Children.List.Path,
    title: AppRoutes.Services.Children.Releases.Children.List.Title,
    component: ReleasesListPage,
  },
  {
    path: AppRoutes.Services.Children.Releases.Children.Info.Path,
    title: AppRoutes.Services.Children.Releases.Children.Info.Title,
    component: ReleasesInfoPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Services.Children.Releases.Children.List.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }
