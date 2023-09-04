import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
// import { AuthGuard } from '../shared/authguard.guard';



const routes: Routes = [
  {
    path:"", component:LoginComponent
 
  },
  {   path:"facultypublishlist",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
