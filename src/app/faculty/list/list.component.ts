import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {
  this.getdata()
  }

  constructor(private jwtHelper :JwtHelperService,private services:UserservicesService){}


  newdata:any;

  getdata(){
    this.services.getdata().subscribe(res=>{
    this.newdata=res;
  
      console.log(res);
      console.log(this.newdata);
    });

  }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
  }

}
