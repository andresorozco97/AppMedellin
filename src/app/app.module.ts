import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './default/header/header.component';
import { PageNotFoundComponent } from './default/page-not-found/page-not-found.component';
import { PageBuildComponent } from './default/page-build/page-build.component';
import { PageLandingComponent } from './component/page-landing/page-landing.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenuComponent } from './default/menu/menu.component';
import { AllComponent } from './component/all/all.component';
import { NewComponent } from './component/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PageBuildComponent,
    PageLandingComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    AllComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
