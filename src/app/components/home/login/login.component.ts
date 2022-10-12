import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Customer from 'src/app/Entity/Customer';
import LoginData from 'src/app/Entity/LoginData';
import { LogincustomerService } from 'src/app/Service/logincustomer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: LoginData = new LoginData();
  authorizedUser: Customer = new Customer();
  loginFlag:boolean=false;

loginForm=new FormGroup({
 loginemail:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
  
})

 get loginemail(){
return this.loginForm.get('loginemail');
}

get password(){
  return this.loginForm.get('password');
  }

  loginCustomer() {
    const observable = this.loginCustomerService.loginCustomer(this.loginData);
    observable.subscribe(
      (response: any) => {
        this.authorizedUser = response as Customer;
        // console.log(this.authorizedUser);
        if (this.authorizedUser == null) {
          Swal.fire(
            'Please check username and password!',
            '',
            'warning'
          )
          this.loginFlag=false;
        } else {
          // alert('Login Successfull');
          Swal.fire(
            'Login SuccessFully!',
            '',
            'success'
          )
          this.loginFlag=true;
          sessionStorage.setItem("isLoggedIn","true");

         this.loginCustomerService.setloginFlagData(this.loginFlag);
          this.route.navigate(['/dashboard'], {
            state: { data: this.authorizedUser },
          });
        }
      },

      function (error) {
        console.log(error);
        alert('Customer not Login');
      }
    );
  }

  constructor(
    public loginCustomerService: LogincustomerService,
    private route: Router
  ) {}

  ngOnInit(): void {}
}
