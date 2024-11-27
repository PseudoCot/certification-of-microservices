import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DestroyService } from './shared/data-accesss/destroy.service';
import { httpInterceptorProviders } from './shared/utils/http-request.interceptor';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from './shared/data-accesss/environment.service';
import { ConfigurationService } from './shared/data-accesss/configuration.service';
import { LayoutHeaderComponent } from "./shared/feature/layout/feature/layout-header/layout-header.component";
import { LayoutFooterComponent } from "./shared/feature/layout/feature/layout-footer/layout-footer.component";
import { LayoutMainComponent } from "./shared/feature/layout/feature/layout-main/layout-main.component";
import { RequirementEntityComponent } from "./shared/ui/requirement-entity/requirement-entity.component";

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
    RequirementEntityComponent
  ],
  providers: [
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
