import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

export const APP_ROUTES: Routes = [{
  path : "",                      // http://localhost:4200
  redirectTo :"/login",
  pathMatch : 'full'
},{
  path : "login",                 // http://localhost:4200/login
  component : LoginComponent
},{
  path : "register",              // http://localhost:4200/register
  component : RegisterComponent
}, {
  path : "users",                 // http://localhost:4200/users
  component : UsersComponent
}, {
  path : "pipes",                 // http://localhost:4200/pipes
  component : PipeDemoComponent
},{
  path : "**",                      // http://localhost:4200/notexist
  redirectTo : "/login",
  pathMatch : 'full'
}]
