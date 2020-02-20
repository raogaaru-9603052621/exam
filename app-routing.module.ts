import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FetchdataComponent} from './fetchdata/fetchdata.component';


const routes: Routes = [{path:"fetchdata",component:FetchdataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
