import { BankserviceService } from './../../bankservice.service';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-transationhistory',
  templateUrl: './transationhistory.component.html',
  styleUrls: ['./transationhistory.component.css']
})
export class TransationhistoryComponent 
{

     ProductArray : any;
     isResultLoaded = false;
     
     constructor(private http:HttpClient, private route:Router,private service:BankserviceService)
     {
      //  this.onUserLoginClick();
      // //  this.showhistory();
      // this.islogin();
     }

     baseUrl:any;
     ngOnInit() 
     {
         this.baseUrl=this.service.apiUrl;
         this.islogin();
     }
   
   xxx : any[] = [];
     showhistory()
     {
       this.http.get(`${this.baseUrl}/showhistory`).subscribe( (b:any)=>{ 
         this.xxx=b;
         console.log(this.vali);
    
       } ,error =>console.log(error))
       
     }

     vali:any;
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
        this.showhistory();
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
           this.route.navigate(['/transationhistory'])
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
