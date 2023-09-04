import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpClient) { }
 
 url="http://localhost:5281/api/Login";


  getdata():Observable<any> {
  const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
   return this.http.get("http://localhost:5281/api/Publish/Get",httpHeaders);
  }

  Login(input: any)
  {
    return this.http.post("http://localhost:5281/api/Login", input);
  }

 

}
