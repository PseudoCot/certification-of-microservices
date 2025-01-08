import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReliasesListPage } from '../reliases-list/reliases-list.page';
import { ReliasesInfoPage } from '../reliases-info/reliases-info.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.Releases.Children.List.Path,
    title: AppRoutes.Services.Children.Releases.Children.List.Title,
    component: ReliasesListPage,
  },
  {
    path: AppRoutes.Services.Children.Releases.Children.Info.Path,
    title: AppRoutes.Services.Children.Releases.Children.Info.Title,
    component: ReliasesInfoPage,
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
export class ReliasesRoutingModule { }
