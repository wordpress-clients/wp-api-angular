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

export * from './Posts';
export * from './Pages';


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
  {
    provide: WpApiPosts,
    useFactory: (config: WpApiAppConfig, http: Http) => new WpApiPosts(config, http),
    deps: [WpApiConfig, Http]
  },
  {
    provide: WpApiPages,
    useFactory: (config: WpApiAppConfig, http: Http) => new WpApiPages(config, http),
    deps: [WpApiConfig, Http]
  }
];

