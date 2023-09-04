import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  private isAuthenticated = false;

  // Method to set the authentication status
  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }

  // Method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
