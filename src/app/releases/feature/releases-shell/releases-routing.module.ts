import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../../../shared/consts';
import { ReleasesInfoPage } from '../releases-info/releases-info.page';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.Releases.Children.Info.Path,
    title: AppRoutes.Services.Children.Releases.Children.Info.Title,
    component: ReleasesInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }
