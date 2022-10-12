import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Customer from '../Entity/Customer';
import {environment} from '../../environments/environment';


const CREATE_CUSTOMER_URL = 'http://localhost:8081/createCustomer';
const COUNTRY_URL = 'http://localhost:8081/countries';
const STATE_URL='http://localhost:8081/states/';
const CUSTOMER_PROFILE_URL='http://localhost:8082/customer/';
const UPDATE_CUSTOMER_URL='http://localhost:8082/update/';
const GET_DUPLICATE_URL="http://localhost:8081/checkDuplicate/";


// const CREATE_CUSTOMER_URL = environment.baseUrl+'customer-service';
// const COUNTRY_URL = environment.baseUrl+'customer-service/countries';
// const STATE_URL=environment.baseUrl+'customer-service/states/';
// const CUSTOMER_PROFILE_URL=environment.baseUrl+'customer-service/';
// const UPDATE_CUSTOMER_URL=environment.baseUrl;
// const GET_DUPLICATE_URL=environment.baseUrl+'customer-service/checkduplicate';


@Injectable({
  providedIn: 'root'
})
export class RegistercustomerService {


  //method to register Customer Details
  registerCustomer(customer:Customer) {
    return this.http.post(CREATE_CUSTOMER_URL, customer);
  }

  //method to get Countries Details
  getCountries(){
    return this.http.get(COUNTRY_URL);
  }

  //method to get States By CountryId
  getStatesByCountryId(countryId:number){
    return this.http.get(STATE_URL+countryId);
  }
//method to get customerProfileById
  getCustomerById(customerId:number){
    return this.http.get(CUSTOMER_PROFILE_URL+customerId);

  }

  //update customer Profile details
  updateCustomer(customer:Customer,id:number) {
    return this.http.put(UPDATE_CUSTOMER_URL+id, customer);
  }

  checkDuplicateEmailId(email:string){
    return this.http.post(GET_DUPLICATE_URL,email);
  }


  constructor(public http: HttpClient) { }
}
