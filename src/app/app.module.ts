import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CategoryComponent } from './components/category/category.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
