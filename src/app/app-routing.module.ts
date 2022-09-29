import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/home/login/login.component';
import { RegistercustomerComponent } from './components/home/registercustomer/registercustomer.component';

const routes: Routes = [
  {path:'register',component:RegistercustomerComponent},
  {path:'login',component:LoginComponent},


    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
