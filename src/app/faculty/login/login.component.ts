import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
// import configurl from '../../../assets/config/config.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthGuard } from 'src/app/shared/authguard.guard';
import { AuthservicesService } from 'src/app/authservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  ngOnInit(): void {
    this.startTimer();
    

  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  invalidLogin?: boolean;
  constructor(private authservices:AuthservicesService,private http: HttpClient, private toastr: ToastrService, private jwtHelper: JwtHelperService, private fb: FormBuilder, private services: UserservicesService, private route: Router) { }

  // Form=this.fb.group({
  //   email:['',Validators.required],
  //   password:['',Validators.required]
  // })

  email: any = ''
  password: any = ''
  show:Boolean= false


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
  private timer: any;
  counter:number=10;

  OnLogin(input:any)
  {

    this.services.Login(input).subscribe(res=>{
      const token = (<any>res).token;
      localStorage.setItem("token", token);
      let string=JSON.stringify(this.show)
      localStorage.setItem("check",string);
      this.show=true;
      this.invalidLogin = false;
      this.toastr.success("Login In Sccessfully");
      // this.authservices.setAuthenticated(true);
      this.route.navigate(["/facultypublishlist"])
      
      this.counter--
      console.log(this.counter);

    })

  }
  public logOut = () => {
    localStorage.removeItem("jwt");
  }

  
  private startTimer() {
    this.timer = setInterval(() => {
      this.decreaseCounter();
    }, 1000); 
  }

  private stopTimer() {
    clearInterval(this.timer); // Clear the timer to stop decreasing the counter
  }


  decreaseCounter() {
    this.counter--;

    if (this.counter === 0) {
      localStorage.removeItem("token")
      this.route.navigate(['']); // Replace '' with the route you want to navigate to
    }
  }


  
  // isUserAuthenticated() {
  //   const token = localStorage.getItem("jwt");
  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }



}






