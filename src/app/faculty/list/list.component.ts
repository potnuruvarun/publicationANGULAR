import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PublicationservicesService } from 'src/app/publicationservices.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {
  this.getdata()
  }

  constructor(private subjectservices:PublicationservicesService,private jwtHelper :JwtHelperService,private services:UserservicesService){}


  newdata:any;
  checking=localStorage.getItem("check");

  getdata(){
   
    this.services.getdata().subscribe(res=>{
    this.newdata=res;
      console.log(res);
      console.log(this.newdata);
    });

    this.subjectservices.getsearchresultsdata().subscribe(res=>{
      this.newdata=res;

    })

  }


  public logOut = () => {
    localStorage.removeItem("token");
  }

  

}
