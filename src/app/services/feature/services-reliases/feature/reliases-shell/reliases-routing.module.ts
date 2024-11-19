import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReliasesListPage } from '../reliases-list/reliases-list.page';
import { ReliasesUnitPage } from '../reliases-unit/reliases-unit.page';
import { AppRoutes } from '../../../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.Reliases.Children.List.Path,
    title: AppRoutes.Services.Children.Reliases.Children.List.Title,
    component: ReliasesListPage,
  },
  {
    path: AppRoutes.Services.Children.Reliases.Children.Unit.Path,
    title: AppRoutes.Services.Children.Reliases.Children.Unit.Title,
    component: ReliasesUnitPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.Services.Children.Reliases.Children.List.Path,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReliasesRoutingModule { }
