import {
  APP_INITIALIZER,
  Inject,
  Injectable,
  OpaqueToken,
  provide,
  Provider
} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { stripTrailingSlash } from './utils';
import { WpApiAppConfig } from './interfaces';
import { WpApiApp, WpApiConfig } from './tokens';

@Injectable()
export class WpApi {
  constructor(
    private config: WpApiAppConfig
  ) {
    console.log('config', config)
  }
}

export const defaultWpApi = (config: WpApiAppConfig): Provider => {
  // remove a trailing slash
  config.baseUrl = stripTrailingSlash(config.baseUrl);
  return provide(WpApiConfig, {
    useValue: config
  });
};

export const WPAPI_PROVIDERS: any[] = [
  HTTP_PROVIDERS,
  {
    provide: WpApi,
    deps: [WpApiConfig]
  },
];
