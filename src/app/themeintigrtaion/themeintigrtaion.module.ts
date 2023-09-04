import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeintigrtaionRoutingModule } from './themeintigrtaion-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ThemeintigrtaionRoutingModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    HeaderComponent
  ]
})
export class ThemeintigrtaionModule { }
