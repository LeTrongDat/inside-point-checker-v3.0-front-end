import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MenuModule} from 'primeng/menu';
import {ProfileComponent} from './profile/profile.component';
import {FormComponent} from './form/form.component';
import {FormDesComponent} from './form-des/form-des.component';
import {FormResComponent} from './form-res/form-res.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AuthenInterceptor} from "../interceptors/authen.interceptor";



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProfileComponent,
    FormComponent,
    FormDesComponent,
    FormResComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    RadioButtonModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule,
    SliderModule,
    InputTextModule,
    MessagesModule,
    MessageModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
