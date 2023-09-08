import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHandler,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpClient) { }


 
 url="http://localhost:5281/api/Login";


  getdata():Observable<any> {
    // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJleHAiOjE2OTM4MjM0NzUsImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.TSVh6Ar4rmwXORZ1ONrYSigABnhpZrcmmYJ8hcvC1po";
    // let head=new HttpHeaders().set("Authorization","bearer "+token);
   return this.http.get("http://localhost:5281/api/Publish/Get");
  }

  Login(input: any)
  {
    return this.http.post("http://localhost:5281/api/Login", input);
  }

  publish(input:any):Observable<any>
  {
    return this.http.post("http://localhost:5281/api/Faculty",input);
  }

  getstudentsdata()
  {
    return this.http.get("http://localhost:5281/api/Publish/Studentdata");
  }

  getstudentbyid(id:any):Observable<any>
  {
    return this.http.get("http://localhost:5281/api/Publish/"+id);
  }

  delete(id:any)
  {
    return this.http.delete("http://localhost:5281/api/Publish/"+id)
  }

  getbyname(input:any):Observable<any>
  {
    return this.http.get("http://localhost:5281/api/Faculty/searchdata/"+input);
  }

  // upload(input:any):Observable<any>
  // {
  //   return  this.http.post('http://localhost:5281/api/Faculty/vdd',input,{responseType:'text'});

  // }


 
  


 

}
