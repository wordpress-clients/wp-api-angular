import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';

export interface IWpApiTaxonomies {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
