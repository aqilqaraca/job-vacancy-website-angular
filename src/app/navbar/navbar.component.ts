import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SearchAction from './search.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchResult = ""
  searchText : Observable<{searchText : String}>
  constructor(private store : Store<{setseach : {searchText : String}}>) { }
  ngOnInit() {
    
  }
  sendSearch(){
    this.store.dispatch(new SearchAction.SetActions(this.searchResult))
    this.searchResult = ""
  }

}
