import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerRequest from 'src/app/Entity/CustomerRequest';
import { CustomerrequestService } from 'src/app/Service/customerrequest.service';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {

categoryselect:string[]=['Human Resource(HR)','Payroll','Software','Hardware','security'];

customerRequest: CustomerRequest = new CustomerRequest();

saveCustomerRequest(){
  this.customerRequest.customerId=JSON.parse(sessionStorage.getItem('customerId'));
  const observable = this.customerRequestService.createCustomerRequest(this.customerRequest);
    observable.subscribe(
      (response: any) => {
        alert("request created successfully");
        this.route.navigate(['/dashboard']);

        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );

}

  constructor(public customerRequestService:CustomerrequestService,public route:Router) { }

  ngOnInit(): void {
  }

}
