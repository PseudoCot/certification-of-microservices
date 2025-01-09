import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DestroyService } from './shared/data-access/destroy.service';
import { httpInterceptorProviders } from './shared/utils/http-request.interceptor';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from './shared/data-access/environment.service';
import { ConfigurationService } from './shared/data-access/configuration.service';
import { LayoutHeaderComponent } from "./shared/feature/layout/feature/layout-header/layout-header.component";
import { LayoutFooterComponent } from "./shared/feature/layout/feature/layout-footer/layout-footer.component";
import { LayoutMainComponent } from "./shared/feature/layout/feature/layout-main/layout-main.component";
import { provideHttpClient } from '@angular/common/http';
import { UserPage } from "./user/feature/user.page";
import { AuthLoginPage } from "./auth/feature/auth-login/auth-login.page";
import { SubmitingModalWindowComponent } from "./shared/ui/submiting-modal-window/submiting-modal-window.component";
import { CreatingModalWindowComponent } from "./shared/feature/creating-modal-window/creating-modal-window.component";

export function initApp(configurationService: ConfigurationService) {
  return () => configurationService.load().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutMainComponent,
    UserPage,
    AuthLoginPage,
    SubmitingModalWindowComponent,
    CreatingModalWindowComponent,
  ],
  providers: [
    provideHttpClient(),
    DestroyService,
    httpInterceptorProviders,
    { provide: ENVIRONMENT, useValue: environment },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [ConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
