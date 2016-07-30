import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiParent } from './Parent';

export interface IWpApiPages {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(pageId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(pageId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(pageId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiPages extends WpApiParent implements IWpApiPages {
  getList(options = {}) {
    return this.httpGet(`/pages`, options)
  }
  get(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/pages`, body, options)
  }
  update(pageId: number, body = {}, options = {}) {
    return this.httpPost(`/pages/${pageId}`, body, options)
  }
  delete(pageId: number, options = {}) {
    return this.httpDelete(`/pages/${pageId}`, options)
  }
  getMetaList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta`, options)
  }
  getMeta(pageId: number, metaId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta/${metaId}`, options)
  }
  getRevisionList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions`, options)
  }
  getRevision(pageId: number, revisionId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions/${revisionId}`, options)
  }
}
