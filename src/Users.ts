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

export interface IWpApiUsers {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  me(options?: RequestOptionsArgs): Observable<Response>;
  get(userId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(userId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(userId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiUsers extends WpApiParent implements IWpApiUsers {
  constructor(
    @Inject(WpApiConfig) public config: WpApiAppConfig,
    public http: Http
  ) {
    super(config, http);
  }
  getList(options = {}) {
    return this.httpGet(`/users`, options)
  }
  me(options = {}) {
    return this.httpGet(`/users/me`, options)
  }
  get(userId: number, options = {}) {
    return this.httpGet(`/users/${userId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/users`, body, options)
  }
  update(userId: number, body = {}, options = {}) {
    return this.httpPost(`/users/${userId}`, body, options)
  }
  delete(userId: number, options = {}) {
    return this.httpDelete(`/users/${userId}`, options)
  }
}
