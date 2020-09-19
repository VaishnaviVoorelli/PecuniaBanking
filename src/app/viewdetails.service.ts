import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ViewdetailsService {


  userName:string;

  constructor(private http: HttpClient) { }

  
  
  public viewbyaccID(accountId:string):Observable<any>{
    
    return this.http.get("http://localhost:8036/cgbank/viewaccountbyaccid/"+accountId);

  }

  public viewbycustID(customerId:string):Observable<any>{
    
    return this.http.get("http://localhost:8036/cgbank/viewaccountsbycustid/"+customerId);

  }


  public doLogin(userId:string,pwd:string):Observable<any>{
    let postData = new FormData();
    postData.append('userid',userId);
    postData.append('password',this.encrypt(pwd));

    return this.http.post("http://localhost:8036/cgbank/login",postData, {responseType:'text'});
  }

  encrypt(token:string){
    let str="";
    for(let i = 0; i < token.length; ++i){
      str = str +String.fromCharCode(token.charCodeAt(i) + 3);
    }
    return str;

  }
  decrypt(token:string){
    let str = "";
    for (let i = 0; i < token.length; ++i){
      str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    console.log(str);
    return str;
  }

  public doLogout(){
    let utoken = localStorage.getItem("token");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenid":utoken});
    return this.http.get("http://localhost:8036/cgbank/logout", {headers:httpHeaders,responseType:'text'});

  }

}

