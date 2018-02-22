import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeadComponent} from './head/head.component';
import {FrameworkModule} from '../framework/framework.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {appRoutes} from './app.routing';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryMaintComponent} from './country-maint/country-maint.component';
import {AuthenticatedUserComponent} from './authenticated-user/authenticated-user.component';
import {UserService} from './services/user.service';
import {UserApi} from '../framework/users/user-api';
import {AuthGuardService} from './services/auth-guard.service';
import {AppDataService} from './services/app-data.service';
import {ImagePanelComponent} from './panels/image-panel/image-panel.component';
import {CountryPanelComponent} from './panels/country-panel/country-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    ImagePanelComponent,
    CountryPanelComponent
  ],
  imports: [
    BrowserModule, FrameworkModule, RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    UserService, {
      provide: UserApi,
      useExisting: UserService
    },
    AuthGuardService,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}