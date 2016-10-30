import { Component } from '@angular/core';
import {
  WpApiPosts,
  WpApiPages,
  WpApiComments,
  WpApiTypes,
  WpApiMedia,
  WpApiUsers,
  WpApiTaxonomies,
  WpApiStatuses,
  WpApiTerms,
  WpApiCustom
} from '../dist/wp-api-angular';
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
    private wpApiTypes: WpApiTypes,
    private wpApiMedia: WpApiMedia,
    private wpApiUsers: WpApiUsers,
    private wpApiTaxonomies: WpApiTaxonomies,
    private wpApiStatuses: WpApiStatuses,
    private wpApiTerms: WpApiTerms,
    private wpApiCustom: WpApiCustom
  ) {
    const serviceNames = Object.keys(config.api);
    for (let i = 0, len = serviceNames.length; i <= len; i++) {
      let serviceName = serviceNames[i];
      let serviceApi = config.api[serviceName];
      if (!this[serviceName]) {
        continue;
      }
      if (Array.isArray(serviceApi)) {
        serviceApi.map(api => {
          this.request(this[serviceName], api, serviceName)
        })
      } else if (serviceName === 'wpApiCustom') {
        Object.keys(serviceApi).map((customType) => {
          let serviceApi = config.api[serviceName][customType];
          this.request(wpApiCustom.getInstance(customType), serviceApi, serviceName);
        });
      } else {
        this.request(this[serviceName], serviceApi, serviceName);
      }
    }
  }

  request(service, serviceApi, serviceName) {
    Object.keys(serviceApi).map((method) => {
      let parameters = serviceApi[method];
      service[method].apply(service, parameters).toPromise()
        .then(response => response.json())
        .then(body => {
          // console.groupCollapsed(serviceName, method, JSON.stringify(parameters));
          // console.log(body);
          // console.groupEnd()
          this.requests.push({ serviceName: serviceName.slice(5), method, success: true })
        })
        .catch(error => {
          console.error(serviceName, method, error.json());
          this.requests.push({ serviceName: serviceName.slice(5), method, success: false })
        });
    });
  }
}

