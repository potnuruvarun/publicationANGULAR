import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthservicesService } from './authservices.service';


@Injectable({
  providedIn: 'root'
})

export class authenticationGuard implements CanActivate {
  constructor(private Authguardservice:AuthservicesService,private router:Router){}
  canActivate(): boolean  {
    if(!this.Authguardservice.gettoken())
    {
      this.router.navigateByUrl("");
    }
    return true;
    // return false;
  }


}



