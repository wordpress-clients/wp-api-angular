import { Component } from '@angular/core';
import {
  WpApiPosts,
  WpApiPages
} from 'wp-api-angularjs';
let config = require('../config.json');

@Component({
  selector: 'app',
  styles: [`
    .error {
        background-color: red;
    }

    .success {
        background-color: green;
    }
  `],
  template: `
    <h2>Posts</h2>
    <div
      *ngFor="let request of requests"
      [ngClass]="{'success': request.success, 'error': !request.success}"
      >
      <b>{{request.serviceName}}</b>: {{request.method}}
    </div>
  `
})
export class App {
  requests = [];
  constructor(
    private wpApiPosts: WpApiPosts,
    private wpApiPages: WpApiPages
  ) {
    const serviceNames = Object.keys(config.api);
    for (let i = 0, len = serviceNames.length; i <= len; i++) {
      let serviceName = serviceNames[i];
      let serviceApi = config.api[serviceName];
      console.log('serviceApi', serviceApi)
      if (!this[serviceName]) {
        continue;
      }
      Object.keys(serviceApi).map((method) => {
        let service = this[serviceName];
        let parameters = serviceApi[method];
        service[method].apply(service, parameters).toPromise()
          .then(() => this.requests.push({ serviceName, method, success: true }))
          .catch(() => this.requests.push({ serviceName, method, success: false }))
      });
    }
  }
}

