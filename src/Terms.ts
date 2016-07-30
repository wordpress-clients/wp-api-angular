import { Injectable } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiParent } from './Parent';

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(taxonomiesType: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(taxonomiesType: string, termId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
}

const defaultTaxoType = 'categories';

@Injectable()
export class WpApiTerms extends WpApiParent implements IWpApiTerms {
  getList(taxonomiesType = defaultTaxoType , options = {}) {
    return this.httpGet(`/${taxonomiesType}`, options)
  }
  get(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpGet(`/${taxonomiesType}/${termId}`, options)
  }
  create(taxonomiesType = defaultTaxoType, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}`, body, options)
  }
  update(taxonomiesType = defaultTaxoType, termId: number, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}/${termId}`, body, options)
  }
  delete(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpDelete(`/${taxonomiesType}/${termId}`, options)
  }
}
