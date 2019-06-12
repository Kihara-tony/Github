import { Component, OnInit } from '@angular/core';
import {DetailsService} from './../details.service';
import {Github} from '../github';
import { Repos } from '../repos';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {
  user : Github;
  repository:Repos;
  newRepository:any;
  private  userName:string;

  constructor(private detailsService:DetailsService) { }
  searchDetails(){
    this.detailsService.updateDetails(this.userName);
    this.detailsService.getUserDetail();
    this.user = this.detailsService.user;
    console.log(this.user);
    this.detailsService.getRepoDetail(this.userName);
    this.newRepository = this.detailsService.newRepository;
    this.detailsService.getRepoDetail(this.newRepository);
    this.repository = this.detailsService.repository;
    this.detailsService.getUserDetail();
    this.user=this.detailsService.user;
  }

  ngOnInit() {

  }

}
