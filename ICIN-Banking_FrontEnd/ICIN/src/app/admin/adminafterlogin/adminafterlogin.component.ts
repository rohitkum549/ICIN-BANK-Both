import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminafterlogin',
  templateUrl: './adminafterlogin.component.html',
  styleUrls: ['./adminafterlogin.component.css']
})
export class AdminafterloginComponent 
{
  vali:any
  constructor(private http:HttpClient,private route:Router,private service:BankserviceService)
  {
    // this.adminLoginName();
    // this.islogin();
  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
  }
  adminLoginName()
  {
    this.http.get(`${this.baseUrl}/displayadminname`,{responseType: 'text'}).subscribe( (b:any)=>{ 
      this.vali=b;
      console.log(this.vali);
      this.viewPhoto();
    } ,error =>console.log(error))
    
  }

  viewphoto:any;
  viewPhoto()
  {
    this.http.get(`${this.baseUrl}/viewphoto`).subscribe( (b:any)=>{ 
      this.viewphoto=b;
    } ,error =>console.log(error))  
  }


  check:any;
  islogin()
  {
    
    this.http.get(`${this.baseUrl}/adminlogin`)
  
    .subscribe((resultData: any)=>
    {
      this.check=resultData;
      console.log(this.vali);
      if(this.check==true)
      {
        this.adminLoginName();
        this.route.navigate(['/adminafterlogin'])
        
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
    
    this.http.get(`${this.baseUrl}/adminlogout`).subscribe((resultData: any)=>
    {
      this.Logout=resultData;
      console.log(this.vali);
        alert("Logout")
        this.route.navigate(['/login'])
    });
  }

}
