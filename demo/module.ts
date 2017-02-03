import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from '../dist/wp-api-angular'
import { App } from './app';

let config = require('../config.json');

console.info('config', config);

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, config.baseUrl);
}

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule { }
