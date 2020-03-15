import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { DomHomeComponent } from './domHome/domHome.component';
import { ViewchildNewComponent } from './viewchildNew/viewchildNew.component';
import { HeaderComponent } from './header/header.component';

import { AheaderComponent } from './components/aheader/aheader.component';
import { AfooterComponent } from './components/afooter/afooter.component';
import { AhomeComponent } from './components/ahome/ahome.component';
import { AnewsComponent } from './components/anews/anews.component';

import { ParentComponent } from './components/parent/parent.component';
import { SonComponent } from './components/son/son.component';

@NgModule({
   declarations: [
      AppComponent,
      PasswordComponent,
      FormComponent,
      NewsComponent,
      HomeComponent,
      SearchComponent,
      TodolistComponent,
      DomHomeComponent,
      ViewchildNewComponent,
      HeaderComponent,
      AheaderComponent,
      AfooterComponent,
      AhomeComponent,
      AnewsComponent,
      ParentComponent,
      SonComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      StorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
