import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import axios from 'axios';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit{
  jobs : any[] = []
  backUp : any[] = []
  deleteJob(n,id){
    axios.delete(`https://affor-jobs-default-rtdb.firebaseio.com/jobs/${n}.json`)
    setTimeout(() => {
      window.location.reload()
    },1000);
  }
  getData(){
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

  constructor(private store : Store<{setseach : {searchText : String}}>) { }

  ngOnInit() {
    this.getData();
    
    
   
  }
  ngDoCheck(){
    let data ;
    data = this.store.select('setseach').subscribe(data => data)
    let otherData = data._subscriptions[0].key.searchText.split(" ")[0]
    this.backUp = this.jobs
    this.jobs = this.jobs.filter(job => job.job.title.split(" ")[0] == otherData)
    if(otherData.length<=0){
      this.jobs = this.backUp
    }

  }
 
}
