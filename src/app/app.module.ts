import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeadComponent} from './head/head.component';
import {FrameworkModule} from '../framework/framework.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HeadComponent
  ],
  imports: [
    BrowserModule, FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}