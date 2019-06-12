import { Injectable } from '@angular/core';
import {Github} from './github'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Repos} from './repos';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private userName:string;
  user:Github;
  newUser:any;
  repository:Repos;
  newRepository:any;

  constructor(private http:HttpClient) {
    this.user = new Github('','','','','','','','','',new Date)
    this.repository =new Repos("","","");
    this.userName = "Tony"
  }
  getUserDetail(){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      location:string;
      following:string;
      follower:string;
      public_repos:string;
      email:string;
      created:Date;
      html__url:string;
      github:string;
    }
    const promise = new Promise(((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users" + this.userName + environment.apiUrl)
      .toPromise().then(response =>{
        this.user.login = response.login;
        this.user.avatar_url=response.avatar_url;
        this.user.name= response.name;
        this.user.location= response.location;
        this.user.follower_url=response.follower;
        this.user.following_url=response.following;
        this.user.email=response.email;
        this.user.created=response.created;
        this.user.repos__url=response.html__url;
        console.log(this.user);
      },
      error=>{
        reject(error);
      });
    }));
    return promise;
  }
  getRepoDetail(newRepository){
    interface ApiResponse{
      name:string;
      repo__url:string;
      description:string;
    }
    const promise = new Promise (((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.newRepository +  environment.apiUrl)
      .toPromise()
      .then(response_repository =>{
        this.newRepository= response_repository;
        resolve();
      });
    }));
    return promise;
  }
  updateDetails(userName:string){
    this.userName=userName;
  }
}
