import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModuleModule } from './common/material-module/material-module.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './invalid/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoauthComponent } from './layouts/noauth/noauth.component';
import { HeaderComponent } from './layouts/noauth/header/header.component';
import { FooterComponent } from './layouts/noauth/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NoauthComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
