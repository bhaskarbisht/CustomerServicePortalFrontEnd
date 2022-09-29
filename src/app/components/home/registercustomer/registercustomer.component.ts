import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Entity/Country';
import Customer from 'src/app/Entity/Customer';
import { RegistercustomerService } from 'src/app/Service/registercustomer.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css'],
})
export class RegistercustomerComponent implements OnInit {
  customer: Customer = new Customer();
  country:Country[];
  states:any;
  country_id:any;

  registerCustomer() {
    const observable = this.regiserCustomerService.registerCustomer(this.customer );
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  getCountries() {
    const promise = this.regiserCustomerService.getCountries();
    promise.subscribe((response) => {
      
      this.country = response as Country[];
      console.log(this.country);
    });
  }

getState(event){
  this.country_id=event.target.value;

  const observable = this.regiserCustomerService.getStatesByCountryId(this.country_id);
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

  constructor(public regiserCustomerService: RegistercustomerService) {}

  ngOnInit(): void {
    this.getCountries();
  }
}
