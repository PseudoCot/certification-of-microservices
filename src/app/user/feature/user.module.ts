import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPage } from './user.page';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserPage],
})
export class UserModule { }
