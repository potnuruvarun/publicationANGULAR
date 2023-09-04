import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyModule } from './faculty/faculty.module';
import { UserModule } from './user/user.module';
import { UserservicesService } from './services/userservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ThemeintigrtaionModule } from './themeintigrtaion/themeintigrtaion.module';
import { ToastrModule  } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FacultyModule,
    UserModule,
    HttpClientModule,
    ThemeintigrtaionModule,
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:5281"],
        disallowedRoutes: []
      }
  }),
    ToastrModule.forRoot()
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
