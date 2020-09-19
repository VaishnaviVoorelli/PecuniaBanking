import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewcustaccountComponent } from './viewcustaccount/viewcustaccount.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'getbyaccid', component:ViewaccountComponent},
  {path:'getbycustid', component:ViewcustaccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
