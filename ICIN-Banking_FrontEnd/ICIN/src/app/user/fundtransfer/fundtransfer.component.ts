import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent 
{

  vali:any
  account:any;
  constructor(private http:HttpClient, private route:Router,private service:BankserviceService)
  {
  this.islogin();
  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
  }



  showAccount()
  { 
    this.http.get(`${this.baseUrl}/accountnumber`,{responseType: 'text'})
    .subscribe((resultData: any)=>
    {
      this.account=resultData;
      console.log(this.account);
    });
  }

  
  fund:any
  fundtranfer(data:any)
  {
    this.http.post(`${this.baseUrl}/fundtransfer`,data).subscribe((b:any)=>{
      this.fund=b;
      if(this.fund==true)
      {
        alert('paisa chala gaya')
        location.reload();
      }
      else{
        alert('paisa nai hai apke pass gandu')
        location.reload();
      }
    console.log(data)
    
    },
    error=>console.log(error));
  }



  onUserLoginClick()
  {
    this.http.get(`${this.baseUrl}/homeDetail`,{responseType: 'text'}).subscribe( (b:any)=>{ 
      this.vali=b;
      this.viewPhoto();
      console.log(this.vali);
    } ,error =>console.log(error))
    
  }

  viewphoto:any;
  viewPhoto()
  {
    this.http.get(`${this.baseUrl}/viewphoto`).subscribe( (b:any)=>{ 
      this.viewphoto=b;
      this.showAccount();
    } ,error =>console.log(error))  
  }


  check:any;
  islogin()
  {
    
    this.http.get(`${this.baseUrl}/userlogin`)
  
    .subscribe((resultData: any)=>
    {
      this.check=resultData;
      console.log(this.vali);
      if(this.check==true)
      {
        this.route.navigate(['/fundtransfer'])
        this.onUserLoginClick();
      }
      else
      {
        alert("Login 1st ")
        this.route.navigate(['/login'])
      }
    });
  }


  Logout:any;
  logout()
  {
    
    this.http.get(`${this.baseUrl}/logout`).subscribe((resultData: any)=>
    {
      this.Logout=resultData;
      console.log(this.vali);
        alert("Logout")
        this.route.navigate(['/login'])
    });
  }


}
