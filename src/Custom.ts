import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

export interface IWpApiCustom {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(customId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(customId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(customId: number, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiCustom extends WpApiParent {
  getInstance(entityName = null) {
    if (!entityName) {
      throw new Error(`getInstance needs an entity name`);
    }
    return new Custom(this.config, this.http, entityName);
  }
}

export class Custom extends WpApiParent implements IWpApiCustom {
  constructor(config, http, private entityName: string) {
    super(config, http);
  }
  getList(options = {}) {
    return this.httpGet(`/${this.entityName}`, options)
  }
  get(customId: number, options = {}) {
    return this.httpGet(`/${this.entityName}/${customId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}`, body, options)
  }
  update(customId: number, body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}/${customId}`, body, options)
  }
  delete(customId: number, options = {}) {
    return this.httpDelete(`/${this.entityName}/${customId}`, options)
  }
}
