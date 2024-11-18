import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReliasesListPage } from '../reliases-list/reliases-list.page';
import { ReliasesUnitPage } from '../reliases-unit/reliases-unit.page';

const routes: Routes = [
  {
    path: '/',
    title: 'Список релизов',
    component: ReliasesListPage,
  },
  {
    path: '/:id',
    title: 'Информация о релизе',
    component: ReliasesUnitPage,
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
export class ReliasesRoutingModule { }
