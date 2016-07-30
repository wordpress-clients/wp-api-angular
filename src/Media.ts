import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiParent } from './Parent';

export interface IWpApiMedia {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(mediaId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiMedia extends WpApiParent implements IWpApiMedia {
  getList(options = {}) {
    return this.httpGet(`/media`, options)
  }
  get(mediaId: number, options = {}) {
    return this.httpGet(`/media/${mediaId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/media`, body, options)
  }
  update(mediaId: number, body = {}, options = {}) {
    return this.httpPost(`/media/${mediaId}`, body, options)
  }
  delete(mediaId: number, options = {}) {
    return this.httpDelete(`/media/${mediaId}`, options)
  }
}
