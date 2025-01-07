import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesListPage } from '../templates-list/templates-list.page';
import { TemplatesInfoPage } from '../templates-info/templates-info.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Templates.Children.List.Path,
    title: AppRoutes.Templates.Children.List.Title,
    component: TemplatesListPage,
  },
  {
    path: AppRoutes.Templates.Children.Info.Path,
    title: AppRoutes.Templates.Children.Info.Title,
    component: TemplatesInfoPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Templates.Children.List.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
