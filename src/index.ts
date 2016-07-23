import {
  provide,
  Provider
} from '@angular/core';
import 'rxjs';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { stripTrailingSlash } from './utils';
import { WpApiAppConfig } from './interfaces';
import { WpApiApp, WpApiConfig } from './tokens';

import { WpApiPosts } from './Posts';
import { WpApiPages } from './Pages';
import { WpApiComments } from './Comments';
import { WpApiTypes } from './Types';

export * from './Posts';
export * from './Pages';
export * from './Comments';
export * from './Types';


export const defaultWpApi = (config: WpApiAppConfig): Provider => {
  // remove a trailing slash
  config.baseUrl = stripTrailingSlash(config.baseUrl);
  config.namespace = config.namespace || '/wp/v2';
  return provide(WpApiConfig, {
    useValue: config
  });
};

export const WPAPI_PROVIDERS: any[] = [
  HTTP_PROVIDERS,
  createProvider(WpApiPosts),
  createProvider(WpApiPages),
  createProvider(WpApiComments),
  createProvider(WpApiTypes)
];

function createProvider(service) {
  return {
    provide: service,
    useFactory: (config: WpApiAppConfig, http: Http) => new service(config, http),
    deps: [WpApiConfig, Http]
  }
}

