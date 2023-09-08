import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyModule } from './faculty/faculty.module';
import { UserModule } from './user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ThemeintigrtaionModule } from './themeintigrtaion/themeintigrtaion.module';
import { ToastrModule  } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenType } from '@angular/compiler';
import { TokeninterceptorService } from './sevices/tokeninterceptor.service';
import { AuthservicesService } from './authguardservices/authservices.service';
import { GoogleLoginProvider, 
  SocialAuthServiceConfig,
  GoogleSigninButtonDirective,

  SocialLoginModule,GoogleSigninButtonModule  } from '@abacritt/angularx-social-login';



export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
 
    
    
  ],
  imports: [
    SocialLoginModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FacultyModule,
    UserModule,
    HttpClientModule,
    ThemeintigrtaionModule,
    GoogleSigninButtonModule,
  
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:5281/"],
        disallowedRoutes: []
      }
  }),
    ToastrModule.forRoot()
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true},AuthservicesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('964897412807-7ng74vpu7tt0qavr83vfgmu9jm8v7k0l.apps.googleusercontent.com'),
          }
        ]
      } 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
