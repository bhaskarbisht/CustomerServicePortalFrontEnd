import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CustomerRequest from '../Entity/CustomerRequest';

const CUSTOMER_REQUEST_URL="http://localhost:8082/getCustomerRequest/";
const DELETE_PENDING_REQUEST="http://localhost:8082/delete/";
const UPDATE_PENDING_REQUEST="http://localhost:8082/updateRequest/";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //method to get All custumer Requests
  getCustomerRequest(customerId:number){
    return this.http.get(CUSTOMER_REQUEST_URL+customerId);
  }

  //method to delete customer request
  deleteRequest(requestId:number){
    return this.http.delete(DELETE_PENDING_REQUEST+requestId);
  }

  //method to update customer Requests
updateRequest(customerRequest:CustomerRequest,requestId:number){
  return this.http.put(UPDATE_PENDING_REQUEST+requestId,customerRequest);
}



  constructor(public http: HttpClient) { }
}
