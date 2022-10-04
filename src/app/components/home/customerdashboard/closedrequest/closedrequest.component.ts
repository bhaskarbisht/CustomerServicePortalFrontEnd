import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/Entity/Customer';
import CustomerRequest from 'src/app/Entity/CustomerRequest';
import { DashboardService } from 'src/app/Service/dashboard.service';

@Component({
  selector: 'app-closedrequest',
  templateUrl: './closedrequest.component.html',
  styleUrls: ['./closedrequest.component.css']
})
export class ClosedrequestComponent implements OnInit {

  customerData: Customer = history.state.data;
  customerId:number;
  customerRequestData:CustomerRequest[];
  closedRequest:CustomerRequest[];

getCustomerClosedRequests(){
  this.customerId=JSON.parse(sessionStorage.getItem('customerId'));   
  const promise = this.dashboardService.getCustomerRequest(this.customerId);
  promise.subscribe((response) => {
    this.customerRequestData = response as CustomerRequest[];
    this.closedRequest = this.customerRequestData.filter(item => (item.requestStatus== "Closed"));
    console.log(this.closedRequest);
   })
}

deleteClosedRequest(requestId:number){
  const observable = this.dashboardService.deleteRequest(requestId);
  observable.subscribe((response: any) => {
    alert("Request Deleted Successfully");
    console.log(response);
    this.ngOnInit();
  });
}

  constructor(public dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getCustomerClosedRequests();
  }

}
