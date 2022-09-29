import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Customer from '../Entity/Customer';

const CREATE_CUSTOMER_URL = 'http://localhost:8081/createCustomer';
const COUNTRY_URL = 'http://localhost:8081/countries';
const STATE_URL='http://localhost:8081/states/'


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



  constructor(public http: HttpClient) { }
}
