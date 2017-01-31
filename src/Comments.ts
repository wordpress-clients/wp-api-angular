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

export interface IWpApiComments {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiComments extends WpApiParent implements IWpApiComments {
  constructor(
    @Inject(WpApiConfig) public config: WpApiAppConfig,
    public http: Http
  ) {
    super(config, http);
  }
  getList(options = {}) {
    return this.httpGet(`/comments`, options)
  }
  get(commentId: number, options = {}) {
    return this.httpGet(`/comments/${commentId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/comments`, body, options)
  }
  update(commentId: number, body = {}, options = {}) {
    return this.httpPost(`/comments/${commentId}`, body, options)
  }
  delete(commentId: number, options = {}) {
    return this.httpDelete(`/comments/${commentId}`, options)
  }
}
