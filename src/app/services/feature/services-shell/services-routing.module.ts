import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListPage } from '../services-list/services-list.page';
import { ServicesUnitPage } from '../services-unit/services-unit.page';

const routes: Routes = [
  {
    path: '/',
    title: 'Список сервисов',
    component: ServicesListPage,
  },
  {
    path: '/reliases',
    title: 'Список релизов',
    loadChildren: () =>
      import('../services-reliases/feature/reliases-shell/reliases.module').then(
        (m) => m.ReliasesModule
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: '/:id',
    title: 'Информация о сервисе',
    component: ServicesUnitPage,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
