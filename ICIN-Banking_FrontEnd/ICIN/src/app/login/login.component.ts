import { BankserviceService } from './../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  // vali:boolean=false
  vali:any
  constructor(private http:HttpClient,private route:Router,private service:BankserviceService)
  {

  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      // this.islogin();
  }

  onadminlogin(data:any)
  {
    console.log(data)
    this.http.post(`${this.baseUrl}/adminlogin`,data).subscribe((data)=>
    {
      this.onAdminLoginClick();
    },
    error=>console.log(error));
    // this.sucess();
  }

  onAdminLoginClick()
  {
    this.http.get(`${this.baseUrl}/adminlogin`).subscribe( (b:any)=>{ 
      this.vali=b;
      console.log(this.vali);
      if(this.vali==true){
        alert("Access granted")
        this.route.navigate(['/adminafterlogin'])
      }
      else{
        alert("Access Decline")
        this.route.navigate(['/login'])
      }
    })
  }


//userLogin

  onUserLoginClick()
  {
    this.http.get(`${this.baseUrl}/userlogin`).subscribe( (b:any)=>{ 
      this.vali=b;
      console.log(this.vali);
      if(this.vali==true){
        alert("Login SucessFully")
        this.route.navigate(['/home'])
      }
      else{
        alert("Galat Jawab!!")
        this.route.navigate(['/login'])
      }
    })
  }
  onuserlogin(data:any)
  {
    this.http.post(`${this.baseUrl}/userlogin`,data).subscribe( (data)=>{ 
      console.log(data);
      this.onUserLoginClick();
    },
    error =>console.log(error));
    console.log(data)
  }

}
