import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogincustomerService } from 'src/app/Service/logincustomer.service';

@Component({
  selector: 'app-headerhome',
  templateUrl: './headerhome.component.html',
  styleUrls: ['./headerhome.component.css']
})
export class HeaderhomeComponent implements OnInit {
changeHeader:boolean=false;


signOutCustomer(){
  sessionStorage.clear();
  console.log("Logout SuccessFully");
  this.logincustomerService.setloginFlagData(false);
  this.route.navigate(['/login']);
  
}

  constructor(public logincustomerService:LogincustomerService,private route:Router) { }


  ngOnInit(): void {
    console.log("inside header component"+this.changeHeader);
  this.changeHeader=   this.logincustomerService.getFlagData();
  console.log(this.changeHeader);
  }

}
