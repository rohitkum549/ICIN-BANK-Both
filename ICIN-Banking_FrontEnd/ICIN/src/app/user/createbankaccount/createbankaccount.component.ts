import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbankaccount',
  templateUrl: './createbankaccount.component.html',
  styleUrls: ['./createbankaccount.component.css']
})
export class CreatebankaccountComponent 
{
  vali:any
  constructor(private http:HttpClient,private route:Router,private service:BankserviceService)
  {
    // this.islogin();
  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
  }

  waitForConform()
  {
    alert('You will get your Accout Number via mobile sms ')
    this.route.navigate(['/home'])
  }



  // onCreateBankAccount(data:any)
  // {
  //   this.http.post('http://localhost:8080/api/icin-banking/createbankaccount',data).subscribe((data)=>{
  //     console.log(data)
  //     this.waitForConform();
  //   },
  //   error =>console.log(error));
  //   console.log(data)
  // }
  onCreateBankAccount(data:any)
  {
    this.http.post(`${this.baseUrl}/createbankaccount`,data).subscribe((data)=>{
      console.log(data)
      this.waitForConform();
    },
    error =>console.log(error));
    console.log(data)
  }


  // onUserLoginClick()
  // {
  //   this.http.get('http://localhost:8080/api/icin-banking/homeDetail',{responseType: 'text'}).subscribe( (b:any)=>{ 
  //     this.vali=b;
  //     console.log(this.vali);
  //     this.viewPhoto();
  //   } ,error =>console.log(error))
    
  // }

  onUserLoginClick()
  {
    this.http.get(`${this.baseUrl}/homeDetail`,{responseType: 'text'}).subscribe( (b:any)=>{ 
      this.vali=b;
      console.log(this.vali);
      this.viewPhoto();
    } ,error =>console.log(error))
    
  }

  // viewphoto:any
  // viewPhoto()
  // {
  //   this.http.get('http://localhost:8080/api/icin-banking/viewphoto').subscribe( (b:any)=>{ 
  //     this.viewphoto=b;
  //   } ,error =>console.log(error))  
  // }

  viewphoto:any
  viewPhoto()
  {
    this.http.get(`${this.baseUrl}/viewphoto`).subscribe( (b:any)=>{ 
      this.viewphoto=b;
    } ,error =>console.log(error))  
  }


  // check:any;
  // islogin()
  // {
    
  //   this.http.get("http://localhost:8080/api/icin-banking/userlogin")
  
  //   .subscribe((resultData: any)=>
  //   {
  //     this.check=resultData;
  //     console.log(this.vali);
  //     if(this.check==true)
  //     {
  //       this.route.navigate(['/createbankaccount'])
  //       this.onUserLoginClick();
  //     }
  //     else
  //     {
  //       alert("You have to Login !st")
  //       this.route.navigate(['/login'])
  //     }
  //   });
  // }

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
        this.route.navigate(['/createbankaccount'])
        this.onUserLoginClick();
      }
      else
      {
        alert("You have to Login !st")
        this.route.navigate(['/login'])
      }
    });
  }


  // Logout:any;
  // logout()
  // {
    
  //   this.http.get("http://localhost:8080/api/icin-banking/logout").subscribe((resultData: any)=>
  //   {
  //     this.Logout=resultData;
  //     console.log(this.Logout);
  //       alert("Logout")
  //       this.route.navigate(['/login'])
  //   });
  // }

  Logout:any;
  logout()
  {
    
    this.http.get(`${this.baseUrl}/logout`).subscribe((resultData: any)=>
    {
      this.Logout=resultData;
      console.log(this.Logout);
        alert("Logout")
        this.route.navigate(['/login'])
    });
  }
}
