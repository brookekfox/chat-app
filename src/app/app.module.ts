import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyA1qOx6Y-rocwj_H9v-xTEhLGxJzj8Jy9o",
  authDomain: "mychatapp-51fe8.firebaseapp.com",
  databaseURL: "https://mychatapp-51fe8.firebaseio.com",
  projectId: "mychatapp-51fe8",
  storageBucket: "mychatapp-51fe8.appspot.com",
  messagingSenderId: "118597090918"
};

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
