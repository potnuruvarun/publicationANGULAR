import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';
import { ILogin } from 'src/app/Interface/login';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  ngOnInit(): void {

  }
  constructor(private services: UserservicesService,private route:Router) {

  }

  email: any = ''
  password: any = ''


  OnLogin(input: any) {
    const obj: ILogin = {
      email: this.email,
      password: this.password
    }
  
    this.services.Login(input).subscribe(res => {
      if(input.value != ''){
        this.route.navigate(["/list"]);
    
        }
      console.log("response", res)
    })
  }
}
