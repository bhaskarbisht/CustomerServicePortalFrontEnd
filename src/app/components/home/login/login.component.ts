import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Customer from 'src/app/Entity/Customer';
import LoginData from 'src/app/Entity/LoginData';
import { LogincustomerService } from 'src/app/Service/logincustomer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: LoginData = new LoginData();
  authorizedUser: Customer = new Customer();
  loginFlag:boolean=false;

  loginCustomer() {
    const observable = this.loginCustomerService.loginCustomer(this.loginData);
    observable.subscribe(
      (response: any) => {
        this.authorizedUser = response as Customer;
        // console.log(this.authorizedUser);
        if (this.authorizedUser == null) {
          alert('Please check username and password');
          this.loginFlag=false;
        } else {
          alert('Login Successfull');
          this.loginFlag=true;
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
