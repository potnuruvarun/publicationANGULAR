import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './faculty/login/login.component';

const routes: Routes = [

//   {
//     path: '',
//     loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)
//   },
  
//   {path:'facultypublishlist',
// loadChildren:()=>import('./faculty/faculty.module').then(m=>m.FacultyModule)
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
