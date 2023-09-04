import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { UserservicesService } from 'src/app/services/userservices.service';
import { ILogin } from 'src/app/Interface/login';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  login!: ILogin;

  constructor(
    private userAuthServices: UserservicesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.CreateLoginForm();
  }


  CreateLoginForm() {
    this.loginForm = this.fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5}))$/),]),],
        password: ['', Validators.required],
      },
    );
  }

  submit(){
  this.login = Object.assign({}, this.loginForm.value);
  this.userAuthServices.Login(this.login).subscribe(res=>{
    

  });
    // (response: ILogin) => {
    //   if (response) {

       
    //   }
    // },
  
}

  // this.services.Login(form).subscrib
  //   console.log(obj)
  // }


}
