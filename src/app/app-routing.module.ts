import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenicateguardGuard } from './authenicateguard.guard';
import { ClosedrequestComponent } from './components/home/customerdashboard/closedrequest/closedrequest.component';
import { CustomerdashboardComponent } from './components/home/customerdashboard/customerdashboard.component';
import { CustomerprofileComponent } from './components/home/customerdashboard/customerprofile/customerprofile.component';
import { NewrequestComponent } from './components/home/customerdashboard/newrequest/newrequest.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistercustomerComponent } from './components/home/registercustomer/registercustomer.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  {path:'register',component:RegistercustomerComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:CustomerdashboardComponent,canActivate:[AuthenicateguardGuard]},
  {path:'newRequest',component:NewrequestComponent,canActivate:[AuthenicateguardGuard]},
  {path:'closedRequest',component:ClosedrequestComponent,canActivate:[AuthenicateguardGuard]},
  {path:'profile',component:CustomerprofileComponent,canActivate:[AuthenicateguardGuard]}



    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
