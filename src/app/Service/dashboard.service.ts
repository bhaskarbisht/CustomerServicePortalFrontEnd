import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CUSTOMER_REQUEST_URL="http://localhost:8082/getCustomerRequest/"

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getCustomerRequest(customerId:number){
    return this.http.get(CUSTOMER_REQUEST_URL+customerId);
  }


  constructor(public http: HttpClient) { }
}
