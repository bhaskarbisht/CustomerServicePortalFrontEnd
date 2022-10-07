import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/Entity/Country';
import Customer from 'src/app/Entity/Customer';
import { RegistercustomerService } from 'src/app/Service/registercustomer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css'],
})
export class RegistercustomerComponent implements OnInit {
  customer: Customer = new Customer();
  country: Country[];
  states: any;
  country_id: any;
  futureDate: any;

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    panNo: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    contactNo: new FormControl('', Validators.required),
    houseNo: new FormControl('', Validators.required),
    countryregister: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    registeremail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get panNo() {
    return this.registerForm.get('panNo');
  }

  get dob() {
    return this.registerForm.get('dob');
  }

  get contactNo() {
    return this.registerForm.get('contactNo');
  }

  get houseNo() {
    return this.registerForm.get('houseNo');
  }

  get countryregister() {
    return this.registerForm.get('countryregister');
  }

  get state() {
    return this.registerForm.get('state');
  }

  get pincode() {
    return this.registerForm.get('pincode');
  }
  get registeremail() {
    return this.registerForm.get('registeremail');
  }

  get password() {
    return this.registerForm.get('password');
  }

  registerCustomer() {
    const observable = this.regiserCustomerService.registerCustomer(
      this.customer
    );
    observable.subscribe(
      (response: any) => {
        console.log(response);
        // alert("Customer Registered Successfully");
        Swal.fire('Customer Registered Successfully!', '', 'success');
        this.route.navigate(['/login']);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  getCountries() {
    const promise = this.regiserCustomerService.getCountries();
    promise.subscribe((response) => {
      this.country = response as Country[];
      // console.log(this.country);
    });
  }

  getState(event) {
    this.country_id = event.target.value;

    const observable = this.regiserCustomerService.getStatesByCountryId(
      this.country_id
    );
    observable.subscribe(
      (response: any) => {
        // console.log(response);
        this.states = response;
      },
      function (error) {
        console.log(error);
      }
    );
  }

  disableFutureDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.futureDate = year + '-' + month + '-' + todayDate;
    //alert(this.futureDate);
  }

  constructor(
    public regiserCustomerService: RegistercustomerService,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.disableFutureDate();
  }
}
