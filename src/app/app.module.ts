import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Github } from './github';
import {GithubComponent} from './github/github.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { UsersDirective } from './users.directive';
import { DateCountPipe } from './date-count.pipe';
import {DetailsService} from './details.service';
import {RoutingModule} from './routing/routing.module';

const routes: Routes = [

  {path:"",component:GithubComponent},
  {path:'user',component:UserComponent},
  {path:"",redirectTo:"/user",pathMatch:"full"},
  {path:"details", component:DetailsComponent},
]

import {FormsModule} from '@angular/forms';
import { Routes } from '@angular/router/src';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailsComponent,
    UsersDirective,
    GithubComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
