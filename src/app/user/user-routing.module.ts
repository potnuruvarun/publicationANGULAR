import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const routes: Routes = [

  {path:"login",component:StudentloginComponent},
  {path:"list",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
