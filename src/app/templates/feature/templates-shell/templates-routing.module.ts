import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesListPage } from '../templates-list/templates-list.page';
import { TemplatesUnitPage } from '../templates-unit/templates-unit.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Templates.Children.List.Path,
    title: AppRoutes.Templates.Children.List.Title,
    component: TemplatesListPage,
  },
  {
    path: AppRoutes.Templates.Children.Unit.Path,
    title: AppRoutes.Templates.Children.Unit.Title,
    component: TemplatesUnitPage,
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
