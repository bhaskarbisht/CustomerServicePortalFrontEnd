import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Customer from 'src/app/Entity/Customer';
import CustomerRequest from 'src/app/Entity/CustomerRequest';
import { DashboardService } from 'src/app/Service/dashboard.service';
import Swal from 'sweetalert2';

declare var jQuery: any;

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
recordslength:any;
tableflag:any;


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
   this.recordslength=this.pendingRequest.length;
   if(this.recordslength!=0){
    this.tableflag=true;
   }
   else{
    this.tableflag=false;
   }
   })
}


deletePendingRequest(requestId:number){
  const observable = this.dashboardService.deleteRequest(requestId);
  observable.subscribe((response: any) => {
    Swal.fire(
      'Request Deleted Successfully',
      '',
      'success'
    )
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
      Swal.fire(
        'Request Updated Successfully',
        '',
        'success'
      )

      jQuery("#butttonclose").click();


      this.ngOnInit();
    },
    function (error) {
      console.log(error);
      alert('Request Not Updated');
    }
  );

}


  constructor( public dashboardService:DashboardService,public route:Router) { }

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
