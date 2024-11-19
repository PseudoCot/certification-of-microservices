import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListPage } from '../services-list/services-list.page';
import { ServicesUnitPage } from '../services-unit/services-unit.page';
import { AppRoutes } from '../../../shared/consts';

const routes: Routes = [
  {
    path: AppRoutes.Services.Children.List.Path,
    title: AppRoutes.Services.Children.List.Title,
    component: ServicesListPage,
  },
  {
    path: AppRoutes.Services.Children.Reliases.Path,
    title: AppRoutes.Services.Children.Reliases.Title,
    loadChildren: () =>
      import('../services-reliases/feature/reliases-shell/reliases.module').then(
        (m) => m.ReliasesModule
      ),
  },
  {
    path: AppRoutes.Services.Children.Unit.Path,
    title: AppRoutes.Services.Children.Unit.Title,
    component: ServicesUnitPage,
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
