import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-JobsEdit',
  templateUrl: './JobsEdit.component.html',
  styleUrls: ['./JobsEdit.component.scss']
})
export class JobsEditComponent implements OnInit {
  constructor(private route : ActivatedRoute) { }
  paramsId = ""
  showSuccess : boolean = false
  jobs : any[] = []
  update(n,id,time,title,company,salary){
    axios.put(`https://affor-jobs-default-rtdb.firebaseio.com/jobs/${n}.json`,{title : title,company : company,
    salary : salary, id : id, time : time
  }).then(response=>this.showSuccess = true).catch(err=>this.showSuccess=false)
  
  }
  ngOnInit() {
    this.route.params.subscribe(params=>this.paramsId = params.id) 
    axios.get("https://affor-jobs-default-rtdb.firebaseio.com/jobs.json").then(response=>{
      for(let key in response.data){
        let jobItems = {
          job : response.data[key],
          fireId : key
        }
        this.jobs.push(jobItems)
        
      }
    })

  }

}
