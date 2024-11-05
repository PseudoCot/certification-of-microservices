import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DestroyService } from './shared/utils/services/destroy.service';
import { httpInterceptorProviders } from './shared/utils/http-request.interceptor';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DestroyService, httpInterceptorProviders],
})
export class AppModule { }
