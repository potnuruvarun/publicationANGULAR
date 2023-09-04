import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private http:HttpClient,private services:UserservicesService){}
  publicationdetail:any='';
  publishername:any='';
  publisherType:any='';


  Form = new FormGroup({
    publicationdetail: new FormControl('', Validators.required),
    publishername: new FormControl([''], Validators.required),
    publisherType:new FormControl([''],Validators.required)

  });

  onsubmit(input:any)
  {
   
    this.services.publish(input).subscribe(res=>{
      alert("Ok");
      console.log(input.value);
    })

  }

}
