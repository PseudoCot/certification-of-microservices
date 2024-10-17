import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPage } from './user.page';

import { UserPageRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, UserPageRoutingModule],
  declarations: [UserPage],
})
export class UserPageModule { }
