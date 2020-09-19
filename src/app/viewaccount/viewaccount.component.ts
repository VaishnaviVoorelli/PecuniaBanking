import { Component, OnInit } from '@angular/core';
import { ViewdetailsService } from '../viewdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit {
  accountId:string;
  acc:Account[]=[];
  msg:string;




 

  constructor(private viewdetailsService:ViewdetailsService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }

    searchById(){
      this.viewdetailsService. viewbyaccID(this.accountId).subscribe(data=>{
        this.acc=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.acc=null}
      ) 
  };
}
