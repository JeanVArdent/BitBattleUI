import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DocsComponent } from './docs/docs.component';
import { CompetitorsComponent } from './admin/competitors/competitors.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { StreamManagementComponent } from './admin/stream-management/stream-management.component';

export const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'docs',
    component: DocsComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/competitors',
    component: CompetitorsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/stream',
    component: StreamManagementComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
