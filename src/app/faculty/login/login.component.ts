import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
// import configurl from '../../../assets/config/config.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {

  }
  invalidLogin?: boolean;
  constructor(private http: HttpClient, private toastr: ToastrService, private jwtHelper: JwtHelperService, private fb: FormBuilder, private services: UserservicesService, private route: Router) { }

  // Form=this.fb.group({
  //   email:['',Validators.required],
  //   password:['',Validators.required]
  // })

  email: any = ''
  password: any = ''
  token: any

  Form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl([''], Validators.required)

  });





  // OnLogin(input: any) {
  //   this.services.Login(input).subscribe(res => {
  //     this.token = res;
  //     console.log(this.token.value);
  //     console.log(this.token)
  //     console.log(input)
  //     localStorage.setItem('access_token', this.token);
  //     if (input.value != '') {
  //       this.route.navigate(["facultypublishlist"])

  //     }
  //     else{

  //       alert("Please Enter Valid Details")
  //       console.log("please enter valid ")
  //     }

  //   });

  // }

  // OnLogin(input: any) {
  //   const val = this.Form.value;

  //   this.services.Login(input).subscribe(res => {
  //     this.token = res;
  //     console.log(this.token.value);
  //     console.log(this.token)
  //     console.log(input)
  //     localStorage.setItem('access_token', this.token);
  //     if (input.value != '') {
  //       this.route.navigate(["facultypublishlist"])

  //     }
  //     else {

  //       alert("Please Enter Valid Details")
  //       console.log("please enter valid ")
  //     }

  //   });
  // }

  url = "http://localhost:5281" + '/api/';
  OnLogin(input: any) {
    const credentials = JSON.stringify(this.Form.value);
    this.http.post(this.url + "Login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(Response => {
      const token = (<any>Response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.toastr.success("Login In SUccessfully");
      this.route.navigate(["/facultypublishlist"])
    

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



}






