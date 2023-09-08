import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PublicationservicesService } from 'src/app/publicationservices.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.searchdata;
  }
  constructor(private searchservice: PublicationservicesService, private route: ActivatedRoute, private http: HttpClient, private services: UserservicesService) {
  }
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newEvent = new EventEmitter<any>();

  array: any[] = [];
  search: any;
  searchdataa: any;
  publicationdetail: any = '';
  publishername: any = '';
  publisherType: any = '';


  Form = new FormGroup({
    publicationdetail: new FormControl('', Validators.required),
    publishername: new FormControl([''], Validators.required),
    publisherType: new FormControl([''], Validators.required)

  });

  onsubmit(input: any) {
    this.services.publish(input).subscribe(res => {
      alert("Ok");
      console.log(input.value);
    })

  }

  onsearch(value: string) {

    var obj = {
      searchss: this.search
    }

    this.array.push(obj)
    this.array.push(this.search)
    console.log(this.array)
    let string = JSON.stringify(this.array)
    localStorage.setItem("data", string)
    this.newItemEvent.emit(value);
  }

  // searchdata(input: any) {
  //   this.services.getbyname(input).subscribe(res => {
  //     this.searchdataa = res;
  //     console.log(this.searchdataa);
  //     this.newEvent.emit(this.searchdataa);
  //   });
  // }

  searchdata(input: any) {
    this.services.getbyname(input).subscribe(res => {
      this.searchdataa = res;
      console.log(this.searchdataa);
      this.searchservice.setProduct(this.searchdataa);

    });
   

  }



}
