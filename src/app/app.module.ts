import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeadComponent} from './head/head.component';
import {FrameworkModule} from '../framework/framework.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HeadComponent, DashboardComponent, SettingsComponent, CountryDetailComponent, CountryListComponent, CountryMaintComponent
  ],
  imports: [
    BrowserModule, FrameworkModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}