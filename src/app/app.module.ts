import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HeroDetailComponent} from "./hero/hero-detail/hero-detail.component";
import {HeroesComponent} from "./hero/heroes/heroes.component";
import {DashboardComponent} from "./hero/dashboard/dashboard.component";
import {HeroSearchComponent} from "./hero/hero-search/hero-search.component";

import {RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {MessagesComponent} from "./messages/messages.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    RouterLink,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],

  exports: [
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
