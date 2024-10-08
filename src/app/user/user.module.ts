import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ThemeintigrtaionModule } from '../themeintigrtaion/themeintigrtaion.module';

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    StudentloginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeintigrtaionModule
  ],
  exports:[
    LoginComponent,
    ListComponent
  ]
})
export class UserModule { }
