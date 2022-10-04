import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/Entity/Customer';
import CustomerRequest from 'src/app/Entity/CustomerRequest';
import { DashboardService } from 'src/app/Service/dashboard.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  customerData: Customer = history.state.data;
  customerId:number;
  customerRequestData:CustomerRequest[];
  pendingRequest:CustomerRequest[];

getCustomerRequests(){
  this.customerId=JSON.parse(sessionStorage.getItem('customerId'));   
  const promise = this.dashboardService.getCustomerRequest(this.customerId);
  promise.subscribe((response) => {
    this.customerRequestData = response as CustomerRequest[];
    this.pendingRequest = this.customerRequestData.filter(item => (item.requestStatus== "Pending"));
    console.log(this.pendingRequest);
   })
}




  constructor( public dashboardService:DashboardService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('customerId')){
      console.log("data already present in session");
     
  }
  else{
    sessionStorage.setItem("customerId",JSON.stringify(this.customerData.customerId));
    console.log("data set to session");
   
  }

this.getCustomerRequests();

  




    
  }

}
