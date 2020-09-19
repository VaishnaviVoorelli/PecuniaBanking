import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage-service';
import { ViewdetailsService } from '../viewdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  msg:string;

  constructor(private router:Router, private storageservice:StorageService,private viewdetailsservice:ViewdetailsService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.viewdetailsservice.doLogin(this.uname , this.pwd).subscribe(data=>{
      this.storageservice.setItem("tokenId", data);
      this.msg=undefined;
      this.router.navigateByUrl("/");
    },error=>{console.log(error),this.msg=JSON.parse(error.error).message});
  }

}