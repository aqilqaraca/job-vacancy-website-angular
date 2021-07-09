import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Home/Home.component';
import { JobsAddComponent } from './JobsAdd/JobsAdd.component';
import { JobsListComponent } from './JobsList/JobsList.component';
import { JobsDetailsComponent } from './JobsDetails/JobsDetails.component';
import { seachReducer } from './navbar/search.reducer';
import { JobsEditComponent } from './JobsEdit/JobsEdit.component';


const routes : Routes = [
  {path : "", component : HomeComponent , pathMatch : "full"},
  {path : "jobs" , component : JobsListComponent},
  {path : "jobs-add" , component : JobsAddComponent},
  {path : "jobs-details/:id" , component : JobsDetailsComponent},
  {path : "edit-details/:id" , component : JobsEditComponent}
]

@NgModule({
  declarations: [									
    AppComponent,
      NavbarComponent,
      HomeComponent,
      JobsAddComponent,
      JobsListComponent,
      JobsDetailsComponent,
      JobsEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forRoot({setseach : seachReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
