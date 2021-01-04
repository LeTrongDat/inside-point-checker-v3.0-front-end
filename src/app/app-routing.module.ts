import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {FormComponent} from './form/form.component';
import {UserServiceService} from '../services/user-service.service';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ProfileComponent, canActivate: [UserServiceService] },
  { path: 'form', component: FormComponent, canActivate: [UserServiceService] },
  { path: '**', component: ProfileComponent, canActivate: [UserServiceService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
