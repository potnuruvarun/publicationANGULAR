import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { authenticationGuard } from '../authguardservices/authentication.guard';
// import { AuthGuard } from '../shared/authguard.guard';



const routes: Routes = [
  {
    path:"", component:LoginComponent
 
  },
  {   path:"facultypublishlist",component:ListComponent,canActivate:[authenticationGuard]},

  // {
  //   path:'', component:LoginComponent
 
  // },
  // {   path:'',component:ListComponent},

 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
