import { Component, OnInit } from '@angular/core';
import { ViewdetailsService } from '../viewdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcustaccount',
  templateUrl: './viewcustaccount.component.html',
  styleUrls: ['./viewcustaccount.component.css']
})
export class ViewcustaccountComponent implements OnInit {

  customerId:string;
  acc:Account[]=[];
  msg:string;




 

  constructor(private viewdetailsService:ViewdetailsService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }

    searchBycustId(){
      this.viewdetailsService. viewbycustID(this.customerId).subscribe(data=>{
        this.acc=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.acc=null}
      ) 
  };
}

