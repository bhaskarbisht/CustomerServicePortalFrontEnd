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
  categoryselect:string[]=['Human Resource(HR)','Payroll','Software','Hardware','security'];
statusOption:string[]=['Pending','Closed'];

fillRequest = {
  requestId: 0,
  customerId:0,
  category: '',
  requestStatus: '',
  requestDate: '',
  description: ''
};


getCustomerRequests(){
  this.customerId=JSON.parse(sessionStorage.getItem('customerId'));   
  const promise = this.dashboardService.getCustomerRequest(this.customerId);
  promise.subscribe((response) => {
    this.customerRequestData = response as CustomerRequest[];
    this.pendingRequest = this.customerRequestData.filter(item => (item.requestStatus== "Pending"));
    console.log(this.pendingRequest);
   })
}


deletePendingRequest(requestId:number){
  const observable = this.dashboardService.deleteRequest(requestId);
  observable.subscribe((response: any) => {
    alert("Request Deleted Successfully");
    console.log(response);
    this.ngOnInit();
  });
}

fillRequestData(request:CustomerRequest){
this.fillRequest=request;
console.log("inside fillrequest");
console.log(this.fillRequest);
}

updatePendingRequest(requestId:number){
  const observable = this.dashboardService.updateRequest(
    this.fillRequest,
    requestId
  );
  console.log(this.fillRequest);
  observable.subscribe(
    (response: any) => {
      console.log(response);
      alert("Request Updated Successfully");
      this.ngOnInit();
    },
    function (error) {
      console.log(error);
      alert('Request Not Updated');
    }
  );

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
