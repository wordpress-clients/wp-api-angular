import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';
import { WpApiConfig } from './tokens';
import { WpApiAppConfig } from './wp-api-angular';

export interface IWpApiStatuses {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(statusesName: string, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
  constructor(
    @Inject(WpApiConfig) public config: WpApiAppConfig,
    public http: Http
  ) {
    super(config, http);
  }
  getList(options = {}) {
    return this.httpGet(`/statuses`, options)
  }
  get(statusesName: string, options = {}) {
    return this.httpGet(`/statuses/${statusesName}`, options)
  }
}
