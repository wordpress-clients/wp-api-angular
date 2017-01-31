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
  constructor(
    @Inject(WpApiConfig) public config: WpApiAppConfig,
    public http: Http
  ) {
    super(config, http);
  }

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
