import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AuthPageComponent } from './auth-page/auth-page.component';

const redirectUnauthorizedToAuthPage = () =>
  redirectUnauthorizedTo(['/authentication']);

const redirectedAuthorisedToEmployeesPage = () =>
  redirectLoggedInTo(['/employees-display']);

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthPageComponent,
    data: { authGuardPipe: redirectedAuthorisedToEmployeesPage },
  },
  {
    path: 'employees-display',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuthPage },
  },
  { path: '', redirectTo: '/employees-display', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
