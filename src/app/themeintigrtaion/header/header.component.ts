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

  array: any[] = [];//for pushing the data
  search: any='';//serchvariable ngmodell two way directive
  searchdataa: any; // single data grtting from database 
  studentsadata: any;//alldata storing purpose
  personaldata: any
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
    console.log(this.search)
    console.log(this.array)
    let string = JSON.stringify(this.array)
    localStorage.setItem("data", string)
    this.newItemEvent.emit(value);


    this.services.getdata().subscribe(res => {
      this.studentsadata = res;
      console.log(this.studentsadata)

      if (this.search =='') {
        console.log(this.studentsadata)
      }
      else {
        const foundStudent = this.studentsadata.filter((e: any) => e.publishername == this.search);


        if (foundStudent) {

          this.personaldata = foundStudent
          // A matching student with the same publishername was found
          console.log(this.personaldata);
        }
        else {
          console.log("error")
        }
      }
      this.searchservice.setsearchdata(this.personaldata)

      if (this.search == this.studentsadata[0].publishername) {

        console.log('ok')

      }

    })
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
