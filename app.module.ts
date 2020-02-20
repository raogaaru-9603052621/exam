import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import {FetchdataComponent} from './fetchdata/fetchdata.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    CounterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FetchdataComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
