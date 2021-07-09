import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-JobsList',
  templateUrl: './JobsList.component.html',
  styleUrls: ['./JobsList.component.scss']
})
export class JobsListComponent implements OnInit {
  jobs : any[] = []
  deleteJob(n : any[],id : any[]){
    axios.delete(`https://affor-jobs-default-rtdb.firebaseio.com/jobs/${n}.json`)
    .then(response=>{
      let index = this.jobs.findIndex(i=>i.id == id)
      this.jobs.splice(index,1)
    })
  }
  constructor() { }

  ngOnInit() {
    axios.get("https://affor-jobs-default-rtdb.firebaseio.com/jobs.json").then(response=>{
      for(let key in response.data){
        let AllJobs = {
          job : response.data[key],
          id : key
        }
        this.jobs.push(AllJobs)
        
      }
    })
  }

}
