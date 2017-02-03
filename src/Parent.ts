import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiLoader } from './Loaders';
import { stripTrailingSlash } from './utils';


export interface IParent {
  httpGet(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpHead(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpDelete(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpPost(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  httpPut(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  httpPatch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
}

@Injectable()
export class WpApiParent implements IParent {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) { }

  httpGet(url: string, options = {}) {
    return this.http.get(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpHead(url: string, options = {}) {
    return this.http.head(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
}
