import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recentsearchs',
  templateUrl: './recentsearchs.component.html',
  styleUrls: ['./recentsearchs.component.css']
})
export class RecentsearchsComponent implements OnInit{
  ngOnInit(): void {
    this.getdata()
  }


  array=[];
  searchdata:any;
  getdata()
  {
  this.searchdata=localStorage.getItem("data")
  console.log(this.searchdata);
  }

 



}
