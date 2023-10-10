import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-requestchequebook',
  templateUrl: './requestchequebook.component.html',
  styleUrls: ['./requestchequebook.component.css']
})
export class RequestchequebookComponent 
{

  vali:any
  constructor(private http:HttpClient, private route:Router,private service:BankserviceService)
  {
  //  this.islogin();
  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
  }

  // onUserLoginClick()
  // {
  //   this.http.get('http://localhost:8080/api/icin-banking/homeDetail',{responseType: 'text'}).subscribe( (b:any)=>{ 
  //     this.vali=b;
  //     console.log(this.vali);
 
  //   } ,error =>console.log(error))
    
  // }

  cheque:any
  ChequeRequest()
  {
    this.http.get(`${this.baseUrl}/chequerequest`,{responseType: 'text'}).subscribe( (b:any)=>{ 
      this.cheque=b;
      console.log(this.cheque);
    } ,error =>console.log(error))  
  }

  onsubmit(data:any)
  {

    console.log(data)
  }


  onUserLoginClick()
  {
    this.http.get(`${this.baseUrl}/homeDetail`,{responseType: 'text'}).subscribe( (b:any)=>{ 
      this.vali=b;
      console.log(this.vali);
      this.viewPhoto();
    } ,error =>console.log(error))
    
  }

  viewphoto:any
  viewPhoto()
  {
    this.http.get(`${this.baseUrl}/viewphoto`).subscribe( (b:any)=>{ 
      this.viewphoto=b;
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
        this.route.navigate(['/requestcheque'])
        this.onUserLoginClick();
      }
      else
      {
        alert("You have to Login !st")
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
      console.log(this.Logout);
        alert("Logout")
        this.route.navigate(['/login'])
    });
  }
}
