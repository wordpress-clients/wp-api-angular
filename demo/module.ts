import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import {
  WpApiModule
} from '../dist/wp-api-angular'
import { App } from './app';

let config = require('../config.json');

console.info('config', config);

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.initializeApp({
      baseUrl: config.baseUrl
    })
  ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule { }
