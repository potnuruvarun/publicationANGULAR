import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeintigrtaionRoutingModule } from './themeintigrtaion-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecentsearchsComponent } from './recentsearchs/recentsearchs.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    RecentsearchsComponent
  ],
  imports: [
    CommonModule,
    ThemeintigrtaionRoutingModule,
    ReactiveFormsModule , FormsModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    RecentsearchsComponent
  ]
})
export class ThemeintigrtaionModule { }
