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
  checking=localStorage.getItem("check");

  getdata(){
    // if(this.checking==false)
    // {
    //   console.log("fbhryfgryfgry")
    //   alert ('please log in')
    // }
    this.services.getdata().subscribe(res=>{
      console.log(res.value)
     
    this.newdata=res;
      console.log(res);
      console.log(this.newdata);
    });

  }

  

  public logOut = () => {
    localStorage.removeItem("token");
  }

  

}
