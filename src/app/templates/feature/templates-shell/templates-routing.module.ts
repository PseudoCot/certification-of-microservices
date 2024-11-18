import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesListPage } from '../templates-list/templates-list.page';
import { TemplatesUnitPage } from '../templates-unit/templates-unit.page';

const routes: Routes = [
  {
    path: '/',
    title: 'Список шаблонов',
    component: TemplatesListPage,
  },
  {
    path: '/:id',
    title: 'Информация о шаблоне',
    component: TemplatesUnitPage,
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
export class TemplatesRoutingModule { }
