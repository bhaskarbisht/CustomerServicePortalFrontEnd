import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerRequest from 'src/app/Entity/CustomerRequest';
import { CustomerrequestService } from 'src/app/Service/customerrequest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {

categoryselect:string[]=['Human Resource(HR)','Payroll','Software','Hardware','security'];
statusOption:string[]=['Pending','Closed'];


customerRequest: CustomerRequest = new CustomerRequest();
mindate:any;

saveCustomerRequest(){
  this.customerRequest.customerId=JSON.parse(sessionStorage.getItem('customerId'));
  const observable = this.customerRequestService.createCustomerRequest(this.customerRequest);
    observable.subscribe(
      (response: any) => {
        Swal.fire(
          'Request created successfully!',
          '',
          'success'
        )
        this.route.navigate(['/dashboard']);

        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );

}
disablePastDate(){
  var date:any=new Date();
  var todayDate:any=date.getDate();
  var month:any=date.getMonth()+1;
  var year:any=date.getFullYear();
  if(todayDate<10){
    todayDate='0'+todayDate;
  }
  if(month<10){
    month='0'+month;
  }
  this.mindate=year+"-"+month+"-"+todayDate;

  // alert(this.mindate);
  

}



  constructor(public customerRequestService:CustomerrequestService,public route:Router) { }

  ngOnInit(): void {

    this.customerRequest.category="0";
    this.customerRequest.requestStatus="Pending";
    this.disablePastDate();

  }

}
