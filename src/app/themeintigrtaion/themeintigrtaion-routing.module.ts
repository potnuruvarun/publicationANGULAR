import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecentsearchsComponent } from './recentsearchs/recentsearchs.component';

const routes: Routes = [
  {path:"main",component:SidebarComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"searchresults",component:RecentsearchsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeintigrtaionRoutingModule { }
