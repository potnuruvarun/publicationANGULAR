import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationservicesService {

  constructor() { }
  private searchDataSubject = new BehaviorSubject<any>({});


  setProduct(searchdata: any) {
    this.searchDataSubject.next(searchdata);
  }
  
  getSearchData() {
    return this.searchDataSubject.asObservable();
  }
}
