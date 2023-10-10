import { BankserviceService } from './../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{

  constructor(private http:HttpClient,private route:Router,private service:BankserviceService)
  {

  }

  baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      // this.islogin();
  }

  signup()
  {
     {
      this.http.get(`${this.baseUrl}/usersignup`).subscribe( (signin:any)=>{ 
        alert("Signup Sucessfully")
        this.route.navigate(['/login'])
      })
     }
  }
  onsubmit(data:any)
  {
    this.http.post(`${this.baseUrl}/usersignup`,data).subscribe((data)=>{

    console.log(data)
    
    },
    error=>console.log(error));
    this.signup();

  }

}
