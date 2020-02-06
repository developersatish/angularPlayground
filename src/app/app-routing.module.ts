import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'angular-cheat-sheet', component: AngularCheatSheetComponent },
  { path: 'scroll-bar', component: ScrollBarComponent },
  {
    path: 'flex',
    loadChildren: () =>
      import('../app/flex/flex.module').then(t => t.FlexModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
