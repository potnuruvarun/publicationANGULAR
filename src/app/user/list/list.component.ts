import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserservicesService } from 'src/app/services/userservices.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.getdata()

  }
  constructor(private http: HttpClient, private route: Router, private services: UserservicesService) {

  }
  id:any;
  studentslist: any;
  publicationdetail:any
  publishername:any;
  publishertype:any;
  message='Deleted Successfully';

  Form=new FormGroup({
    publicationdetail:new FormControl(['']),
    publishername:new FormControl(['']),
    publishertype:new FormControl(['']),

  })
  getdata() {
    this.services.getstudentsdata().subscribe(res => {
      this.studentslist = res;
      console.log("response", res);
    })
  }

  onclick(id:any) {
    alert("hiii")
    this.services.getstudentbyid(id).subscribe(res=>{
      this.publicationdetail=res[0].publicationdetail
      this.publishertype=res[0].publisherType
      this.publishername=res[0].publishername
    })

      console.log(id);
  }

  ondelete(id:any)
  {
    this.services.delete(id).subscribe(res=>{
      alert("deleted successfully")
    })
    
  }








}
