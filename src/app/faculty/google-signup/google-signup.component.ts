import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-signup',
  templateUrl: './google-signup.component.html',
  styleUrls: ['./google-signup.component.css']
})
export class GoogleSignupComponent implements OnInit{
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: '964897412807-7ng74vpu7tt0qavr83vfgmu9jm8v7k0l.apps.googleusercontent.com', // Replace with your Google client ID
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      {
        size: 'large', // Adjust the size as needed
        text: 'login_with', // Customize the button text
      }
    );
  }

}
