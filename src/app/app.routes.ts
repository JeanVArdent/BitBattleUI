import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DocsComponent } from './docs/docs.component';
import { CompetitorsComponent } from './admin/competitors/competitors.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { StreamManagementComponent } from './admin/stream-management/stream-management.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { SubmissionComponent } from './submission/submission.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { TestingComponent } from './testing/testing.component';

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
    path: 'submission',
    component: SubmissionComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'visualizer',
    component: VisualizationComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'test',
    component: TestingComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
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
    path: 'access-denied',
    component: AccessDeniedComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
