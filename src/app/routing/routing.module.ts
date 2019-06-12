import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {GithubComponent} from './../github/github.component';
import {DetailsComponent} from '../details/details.component';

const routes: Routes = [

  {path:'user',component:UserComponent},
  {path:"",redirectTo:"/user",pathMatch:"full"},
  {path:"details", component:DetailsComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule],
  declarations:[]
})
export class RoutingModule { }
