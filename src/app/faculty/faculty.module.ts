import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';  
import { FacultyRoutingModule } from './faculty-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ThemeintigrtaionModule } from '../themeintigrtaion/themeintigrtaion.module';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ThemeintigrtaionModule
  
  ],
  exports:[
LoginComponent,
ListComponent
  ]
})
export class FacultyModule { }
