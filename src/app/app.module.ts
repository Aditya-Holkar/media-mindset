import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CcComponent } from './cc/cc.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { SeoComponent } from './seo/seo.component';
import { SmmComponent } from './smm/smm.component';

@NgModule({
  declarations: [
    AppComponent,
    CcComponent,
    HeadComponent,
    MainComponent,
    SeoComponent,
    SmmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
