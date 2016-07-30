import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiParent } from './Parent';

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
