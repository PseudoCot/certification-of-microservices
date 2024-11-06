import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPage } from './not-found.page';

import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule],
  declarations: [NotFoundPage],
})
export class NotFoundModule { }
