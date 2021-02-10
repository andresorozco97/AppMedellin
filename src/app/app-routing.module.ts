import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './component/all/all.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { NewComponent } from './component/new/new.component';
import { PageLandingComponent } from './component/page-landing/page-landing.component';
import { PageNotFoundComponent } from './default/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageLandingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/all', pathMatch: 'full', component: DashboardComponent, children: [
    { path: '', pathMatch: 'full', component: AllComponent, outlet: 'menu'}]},
  { path: 'dashboard/new', pathMatch: 'full', component: DashboardComponent, children: [
    { path: '', pathMatch: 'full', component: NewComponent, outlet: 'menu'}]},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
