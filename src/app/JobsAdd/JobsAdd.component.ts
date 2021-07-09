import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-JobsAdd',
  templateUrl: './JobsAdd.component.html',
  styleUrls: ['./JobsAdd.component.scss']
})
export class JobsAddComponent implements OnInit {
  
  title = ""
  company = ""
  salary = ""
  sendDatas(){
    axios.post("https://affor-jobs-default-rtdb.firebaseio.com/jobs.json",{title : this.title,company : this.company,
    salary : this.salary, id : Date.now() , time : new Date().getDay()+"/"+new Date().getMonth()+'/'+new Date().getFullYear()
  })
  this.title = ""
  this.company = ""
  this.salary = ""
  }
 
  ngOnInit():void {}

}
