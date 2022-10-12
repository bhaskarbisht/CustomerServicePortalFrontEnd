import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CustomerRequest from '../Entity/CustomerRequest';
import {environment} from '../../environments/environment';

const CUSTOMER_REQUEST_URL="http://localhost:8082/getCustomerRequest/";
const DELETE_PENDING_REQUEST="http://localhost:8082/delete/";
const UPDATE_PENDING_REQUEST="http://localhost:8082/updateRequest/";

// const CUSTOMER_REQUEST_URL=environment.baseUrl+'customerrequest/';
// const DELETE_PENDING_REQUEST=environment.baseUrl+'deleterequest/';
// const UPDATE_PENDING_REQUEST=environment.baseUrl+'updaterequest/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //method to get All custumer Requests
  getCustomerRequest(customerId:number){
    return this.http.get(CUSTOMER_REQUEST_URL+customerId);
  }

  //method to delete customer request
  deleteRequest(requestId:number){
    return this.http.delete(DELETE_PENDING_REQUEST+requestId);
  }

  //method to update customer Requests
updateRequest(customerRequest:CustomerRequest,requestId:number){
  return this.http.put(UPDATE_PENDING_REQUEST+requestId,customerRequest);
}

disableFutureDate(){
  var futureDate;
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
  futureDate=year+"-"+month+"-"+todayDate;
  //alert(this.futureDate);
  return futureDate;

}




  constructor(public http: HttpClient) { }
}
