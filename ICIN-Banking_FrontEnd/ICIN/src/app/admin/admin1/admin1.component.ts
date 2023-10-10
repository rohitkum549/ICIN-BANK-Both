import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component 
{
    ProductArray : any;
    isResultLoaded = false;
    
  
    constructor(private http:HttpClient, private route:Router,private service:BankserviceService)
    {
      // this.islogin();
      // this.onAccountView();
    }
  
    baseUrl:any;
  ngOnInit() 
  {
      this.baseUrl=this.service.apiUrl;
      this.islogin();
  }
  
  // vali:any;
  //   islogin()
  //   {
      
  //     this.http.get("http://localhost:8080/api/icin-banking/homeDetail",{responseType :'text'})
    
  //     .subscribe((resultData: any)=>
  //     {
  //       this.vali=resultData;
  //       console.log(this.vali);
  //     });
  //   }
  vali:any;
    onAccountView()
    {
      this.http.get(`${this.baseUrl}/accountView`).subscribe( (b:any)=>{ 
        this.ProductArray=b;
        console.log(this.vali);
   
      } ,error =>console.log(error))
      
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
      this.onAccountView();
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
        this.route.navigate(['/accountview'])
        this.onUserLoginClick();
        // this.viewPhoto();
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
