import { Component } from '@angular/core';
import {ViewdetailsService} from './viewdetails.service'
import {Login} from './login'
import { Router } from '@angular/router';
import {StorageService} from './storage-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pecunia Bank';
  myimage:string = "assets/images/pecunia.jpg";
  msg:string;
  errorMsg:string;
  loginflag:boolean=false;
  login:Login = new Login();
  userName:string;
  role:string;

  constructor(private viewdetailsService:ViewdetailsService, private router:Router,private storageService:StorageService){
    if(localStorage.getItem("tokenId") !=null){
      let userstr = localStorage.getItem("tokenId");
      console.log(userstr.split("-")[1]);
      this.userName=this.viewdetailsService.decrypt(userstr.split("-")[1]);
      this.loginflag=true;
      this.role=this.viewdetailsService.decrypt(userstr.split("-")[2]);
    }

  }
  ngOnInit(): void {

    this.storageService.watchStorage().subscribe(data=>{
      console.log(data);
      if(data == "set"){
        let userstr = localStorage.getItem("tokenId");
        console.log(userstr.split("-")[2]);
        this.userName=this.viewdetailsService.decrypt(userstr.split("-")[1]);
        this.loginflag=true;
      }
      else
      this.loginflag=false;
    });


   }

   logout(): void {
     this.viewdetailsService.doLogout().subscribe(data=>{console.log(data);
      this.storageService.removeItem("tokenId");
      console.log("You have logged out");
      this.loginflag=false;
    });
   }
  
}

