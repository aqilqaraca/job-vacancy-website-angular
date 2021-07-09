import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-JobsDetails',
  templateUrl: './JobsDetails.component.html',
  styleUrls: ['./JobsDetails.component.scss']
})
export class JobsDetailsComponent implements OnInit {
  constructor(private route : ActivatedRoute) { }
  paramsId = ""
  jobs : any[] = []
  ngOnInit() {
    this.route.params.subscribe(params=>this.paramsId = params.id) 
    axios.get("https://affor-jobs-default-rtdb.firebaseio.com/jobs.json").then(response=>{
      for(let key in response.data){
        this.jobs.push(response.data[key])
        
      }
    })

  }

}
