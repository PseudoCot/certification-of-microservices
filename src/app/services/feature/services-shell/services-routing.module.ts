import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListPage } from '../services-list/services-list.page';
import { ServicesTemplatesPage } from '../services-templates/services-templates.page';
import { ServicesTemplatePage } from '../services-template/services-template.page';
import { ServicesUnitPage } from '../services-unit/services-unit.page';

const routes: Routes = [
  {
    path: '/',
    component: ServicesListPage,
  },
  {
    path: '/templates',
    component: ServicesTemplatesPage,
  },
  {
    path: '/templates/:id',
    component: ServicesTemplatePage,
  },
  {
    path: '/:id',
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
