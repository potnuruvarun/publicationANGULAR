import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
// import configurl from '../../../assets/config/config.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthGuard } from 'src/app/shared/authguard.guard';
import { AuthservicesService } from 'src/app/authguardservices/authservices.service';
import {SocialAuthService,GoogleLoginProvider,SocialUser} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = ''
  password:any=''
  show: Boolean = false
  isLoggedin?: boolean;
  private accessToken = '';
  ngOnInit(): void {
    this.startTimer();


  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  invalidLogin?: boolean;
  constructor(private socialAuthservices: SocialAuthService, private authservices: AuthservicesService, private http: HttpClient, private toastr: ToastrService, private jwtHelper: JwtHelperService, private fb: FormBuilder, private services: UserservicesService, private route: Router,) { }

  // Form=this.fb.group({
  //   email:['',Validators.required],
  //   password:['',Validators.required]
  // })




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
  counter: number = 10;

  OnLogin(input: any) {

    this.services.Login(input).subscribe(res => {
      const token = (<any>res).token;
      localStorage.setItem("token", token);
      let string = JSON.stringify(this.show)
      localStorage.setItem("check", string);
      this.show = true;
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
  
  refreshToken(): void {
    this.socialAuthservices.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  async loginWithGoogle(): Promise<void> {
    try {
      await this.socialAuthservices.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.route.navigate(['/dashboard']);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      // Handle the error as needed.
    }
  }
  
  // getAccessToken(): void {
  //   this.socialAuthservices.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken =&gt; this.accessToken = accessToken);
  // }

  // getGoogleCalendarData(): void {
  //   if (!this.accessToken) return;

  //   this.http
  //     .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
  //       headers: { Authorization: `Bearer ${this.accessToken}` },
  //     })
  //     .subscribe((events) =&gt; {
  //       alert('Look at your console');
  //       console.log('events', events);
  //     });
  // }



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






