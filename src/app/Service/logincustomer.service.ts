import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LoginData from '../Entity/LoginData';

const LOGIN_URL = 'http://localhost:8081/login';

@Injectable({
  providedIn: 'root'
})
export class LogincustomerService {
  flagLogin:boolean=false;

  loginCustomer(logindata:LoginData) {
    return this.http.post(LOGIN_URL, logindata);
  }

setloginFlagData(loginFlag:boolean){
 this.flagLogin=loginFlag;
}

getFlagData(){
return this.flagLogin;
}

  constructor(public http: HttpClient) { }
}
