import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import {NgForm} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { Homepage1Component } from './user/homepage1/homepage1.component';
import { Homepage2Component } from './user/homepage2/homepage2.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AfterloginComponent } from './user/afterlogin/afterlogin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { AdminafterloginComponent } from './admin/adminafterlogin/adminafterlogin.component';
import { CreatebankaccountComponent } from './user/createbankaccount/createbankaccount.component';
// import { AccountviewComponent } from './accountview/accountview.component';
import { FundtransferComponent } from './user/fundtransfer/fundtransfer.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { RequestchequebookComponent } from './user/requestchequebook/requestchequebook.component';
import { AdminaccountholderviewComponent } from './admin/adminaccountholderview/adminaccountholderview.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { Admin2Component } from './admin/admin2/admin2.component';
import { AddmoneyComponent } from './admin/addmoney/addmoney.component';
import { TransationhistoryComponent } from './user/transationhistory/transationhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    Homepage1Component,
    Homepage2Component,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AfterloginComponent,
    CarouselComponent,
    Carousel1Component,
    Carousel2Component,
    Carousel3Component,
    AdminafterloginComponent,
    CreatebankaccountComponent,
    // AccountviewComponent,
    FundtransferComponent,
    MyprofileComponent,
    RequestchequebookComponent,
    AdminaccountholderviewComponent,
    Admin1Component,
    Admin2Component,
    AddmoneyComponent,
    TransationhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgForm,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
