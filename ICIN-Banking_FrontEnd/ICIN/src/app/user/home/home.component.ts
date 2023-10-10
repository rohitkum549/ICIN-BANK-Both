import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{

  vali:any
  constructor(private http:HttpClient, private route:Router,private service:BankserviceService)
  {
    // this.islogin();
  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
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
        this.route.navigate(['/home'])
        this.onUserLoginClick();
      }
      else
      {
        alert("GAndu Login Kar PEhle")
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
