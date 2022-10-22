import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Entity/Country';
import Customer from 'src/app/Entity/Customer';
import { DashboardService } from 'src/app/Service/dashboard.service';
import { RegistercustomerService } from 'src/app/Service/registercustomer.service';
import Swal from 'sweetalert2';
declare var jQuery: any;


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
  countryName:any;



  getProfile(){
    this.customerId=JSON.parse(sessionStorage.getItem('customerId'));   
    const promise = this.registerCustomerService.getCustomerById(this.customerId);
    promise.subscribe((response) => {
      this.customer = response as Customer;   
      console.log(this.customer);
    //  this.countryName= this.country.filter(item=>(item.id==parseInt(this.customer.address.country)));
    //   console.log(this.countryName);
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
      Swal.fire(
        'Proofile Updated successfully!!',
        '',
        'success'
      )
      jQuery("#butttonclose").click();

      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );


}



  constructor(public registerCustomerService:RegistercustomerService,public dashboard:DashboardService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getProfile();
   

  }

}
