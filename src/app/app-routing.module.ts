import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './common/guard/auth.guard';
import { NoauthComponent } from './layouts/noauth/noauth.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    component: NoauthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
