import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';

import { IWpApiPages } from './interfaces';

@Injectable()
export class WpApiPages extends WpApiParent implements IWpApiPages {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) {
    super(wpApiLoader, http);
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
