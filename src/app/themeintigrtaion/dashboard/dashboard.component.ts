import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationservicesService } from 'src/app/publicationservices.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private timer: any;
  counter: number = 1200;
  items = [''];
  searchitem:any;

  constructor(private services:PublicationservicesService,private route: Router) { 
   
  }
  ngOnInit(): void {
    this.startTimer();
    this.services.getSearchData().subscribe(res=>{
      this.searchitem=res;
      console.log(this.searchitem)

    });
  
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private startTimer() {
    this.timer = setInterval(() => {
      this.decreaseCounter();
    }, 1000); 
  }

  private stopTimer() {
    clearInterval(this.timer); // Clear the timer to stop decreasing the counter
  }


  decreaseCounter() {
    this.counter--;

    if (this.counter === 0) {
      localStorage.removeItem("token")
      this.route.navigate(['']); // Replace '' with the route you want to navigate to
    }
  }



  addItem(newItem: string) {
    this.items.push(newItem);
    
  }

  // searchitems(searchdataa:any){
  //   this.searchitem=searchdataa;
  //   console.log(this.searchitem)
  // }




}
