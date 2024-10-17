import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DestroyService } from './shared/utils/services/destroy.service';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DestroyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
