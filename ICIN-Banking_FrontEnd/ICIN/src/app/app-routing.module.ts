import { TransationhistoryComponent } from './user/transationhistory/transationhistory.component';
import { AddmoneyComponent } from './admin/addmoney/addmoney.component';
import { FundtransferComponent } from './user/fundtransfer/fundtransfer.component';
import { Admin1Component } from './admin/admin1/admin1.component';
import { AdminaccountholderviewComponent } from './admin/adminaccountholderview/adminaccountholderview.component';
// import { AccountviewComponent } from './accountview/accountview.component';
import { RequestchequebookComponent } from './user/requestchequebook/requestchequebook.component';
import { CreatebankaccountComponent } from './user/createbankaccount/createbankaccount.component';
import { AdminafterloginComponent } from './admin/adminafterlogin/adminafterlogin.component';
import { AfterloginComponent } from './user/afterlogin/afterlogin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Homepage1Component } from './user/homepage1/homepage1.component';
import { HomeComponent } from './user/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path:'',component:Homepage1Component},
  {path:'home',component:HomeComponent},
  {path:'icin',component:Homepage1Component},
  {path:'login',component:LoginComponent},
  {path:'afterlogin',component:AfterloginComponent},
  {path:'adminafterlogin',component:AdminafterloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'createbankaccount',component:CreatebankaccountComponent},
  {path:'requestchequebook',component:RequestchequebookComponent},
  // {path:'accountview',component:AccountviewComponent},
  {path:'adminaccountholderview',component:AdminaccountholderviewComponent},
  {path:'accountview',component:Admin1Component},
  {path:'requestcheque',component:RequestchequebookComponent},
  {path:'fundtransfer',component:FundtransferComponent},
  {path:'addmoney',component:AddmoneyComponent},
  {path:'transationhistory',component:TransationhistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
