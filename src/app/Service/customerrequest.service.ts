import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CustomerRequest from '../Entity/CustomerRequest';

const Customer_REQUEST_URL='http://localhost:8082/createCustomerRequest'


@Injectable({
  providedIn: 'root'
})
export class CustomerrequestService {

  //method to Create New Customer Service request
  createCustomerRequest(customerRequest:CustomerRequest) {
    return this.http.post(Customer_REQUEST_URL, customerRequest);
  }


  constructor(public http: HttpClient) { }
}
