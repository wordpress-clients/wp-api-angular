import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiParent } from './Parent';

export interface IWpApiComments {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiComments extends WpApiParent implements IWpApiComments {
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
