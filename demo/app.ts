import { Component } from '@angular/core';
import {
  WpApiPosts,
  WpApiPages,
  WpApiComments,
  WpApiTypes
} from 'wp-api-angularjs';
let config = require('../config.json');

@Component({
  selector: 'app',
  styles: [`
    .error {
        background-color: #e74c3c;
    }

    .success {
        background-color: #00bc8c;
    }
    span {
      color: white;
      padding: 2px 10px;
    }
    b{
      color: black;
      width: 100px;
      display: inline-block;
    }
  `],
  template: `
    <div
      *ngFor="let request of requests"
      [ngClass]="{'success': request.success, 'error': !request.success}"
      >
      <span><b>{{request.serviceName}}</b> {{request.method}}</span>
    </div>
  `
})
export class App {
  requests = [];
  constructor(
    private wpApiPosts: WpApiPosts,
    private wpApiPages: WpApiPages,
    private wpApiComments: WpApiComments,
    private wpApiTypes: WpApiTypes
  ) {
    const serviceNames = Object.keys(config.api);
    for (let i = 0, len = serviceNames.length; i <= len; i++) {
      let serviceName = serviceNames[i];
      let serviceApi = config.api[serviceName];
      if (!this[serviceName]) {
        continue;
      }
      Object.keys(serviceApi).map((method) => {
        let service = this[serviceName];
        let parameters = serviceApi[method];
        service[method].apply(service, parameters).toPromise()
          .then(() => this.requests.push({ serviceName: serviceName.slice(5), method, success: true }))
          .catch(() => this.requests.push({ serviceName: serviceName.slice(5), method, success: false }))
      });
    }
  }
}

