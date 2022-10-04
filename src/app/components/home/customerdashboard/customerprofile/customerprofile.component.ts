import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Entity/Country';
import Customer from 'src/app/Entity/Customer';
import { RegistercustomerService } from 'src/app/Service/registercustomer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  customerId:number;
  customer: Customer = new Customer();
  country:Country[];
  states:any;
  country_id:any;

  setcountry:string;
  setstate:string;


  getProfile(){
    this.customerId=JSON.parse(sessionStorage.getItem('customerId'));   
    const promise = this.registerCustomerService.getCustomerById(this.customerId);
    promise.subscribe((response) => {
      this.customer = response as Customer;   
      console.log(this.customer);
     })
  }
  

  getCountries() {
    const promise = this.registerCustomerService.getCountries();
    promise.subscribe((response) => {
      
      this.country = response as Country[];

      // console.log(this.country);
    });
  }

getState(event){
  this.country_id=event.target.value;

  const observable = this.registerCustomerService.getStatesByCountryId(this.country_id);
    observable.subscribe(
      (response: any) => {
         console.log(response);
        this.states=response;
      },
      function (error) {
        console.log(error);
      }
    );

}


getstatesOnload(country_id:string){

  const observable = this.registerCustomerService.getStatesByCountryId(parseInt(country_id));
    observable.subscribe(
      (response: any) => {
         console.log(response);
        this.states=response;
      },
      function (error) {
        console.log(error);
      }
    );

}


updateProfile(customerId:number){
  const observable = this.registerCustomerService.updateCustomer(this.customer,customerId);
  observable.subscribe(
    (response: any) => {
      alert("Customer data Updated successfully");

      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );


}


  constructor(public registerCustomerService:RegistercustomerService) { }

  ngOnInit(): void {
    this.getProfile();
    this.getCountries();

  }

}
