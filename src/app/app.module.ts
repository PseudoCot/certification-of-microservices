import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from './shared/data-access/environment.service';
import { ConfigurationService } from './shared/data-access/configuration.service';
import { LayoutHeaderComponent } from "./shared/feature/layout/feature/layout-header/layout-header.component";
import { LayoutFooterComponent } from "./shared/feature/layout/feature/layout-footer/layout-footer.component";
import { LayoutMainComponent } from "./shared/feature/layout/feature/layout-main/layout-main.component";
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { UserPage } from "./user/feature/user.page";
import { AuthLoginPage } from "./auth/feature/auth-login/auth-login.page";
import { SubmitingModalWindowComponent } from "./shared/ui/submiting-modal-window/submiting-modal-window.component";
import { CreatingModalWindowComponent } from "./shared/feature/creating-modal-window/creating-modal-window.component";
import { CreatingRequirementFormComponent } from "./requirements/feature/creating-requirement-form/creating-requirement-form.component";
import { ServicesInfoPage } from "./services/feature/services-info/services-info.page";
import { ServicesListPage } from "./services/feature/services-list/services-list.page";
import { HttpAuthInterceptor } from './shared/utils/interceptors/http-auth.interceptor';

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
    CreatingRequirementFormComponent,
    ServicesInfoPage,
    ServicesListPage
  ],
  providers: [
    // provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(),
    [
      { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
    ],
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
