import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './register/register';
import { Student } from './student/student';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'register', component: Register },
   { path: 'student', component: Student },
  { path: '', component: Dashboard, pathMatch: 'full' }
];