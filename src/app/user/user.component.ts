import { Component, OnInit } from '@angular/core';
import {Github} from '../github';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DetailsService} from './../details.service';
import {Repos} from "../repos";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:Github;
  repository:Repos;
  private userName:string;
  newUser:any;
  newRepository:any;
  constructor(private detailsService:DetailsService) {
  }
  searchDetails(){
    this.detailsService.updateDetails(this.userName)
    this.detailsService.getUserDetail();
    this.user = this.detailsService.user;
    console.log(this.user);
    this.detailsService.getRepoDetail(this.userName);
   this.newRepository = this.detailsService.newRepository;
   this.detailsService.getRepoDetail(this.userName);
   this.repository=this.detailsService.repository;
   this.detailsService.getUserDetail();
   this.user=this.detailsService.user;
  }

  ngOnInit() {

  }

}
