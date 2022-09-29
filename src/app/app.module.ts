import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderhomeComponent } from './components/home/headerhome/headerhome.component';
import { FooterhomeComponent } from './components/home/footerhome/footerhome.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistercustomerComponent } from './components/home/registercustomer/registercustomer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderhomeComponent,
    FooterhomeComponent,
    LoginComponent,
    RegistercustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
