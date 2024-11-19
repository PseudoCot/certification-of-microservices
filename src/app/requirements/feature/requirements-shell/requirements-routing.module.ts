import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementsListPage } from '../requirements-list/requirements-list.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Requirements.Children.List.Path,
    title: AppRoutes.Requirements.Children.List.Title,
    component: RequirementsListPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Requirements.Children.List.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementsRoutingModule { }
