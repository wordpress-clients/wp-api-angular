import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable.d.ts';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

import { WpApiAppConfig } from './wp-api-angular';

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
    public config: WpApiAppConfig,
    public http: Http
  ) { }

  getFullUrl(postfix: string): string {
    return `${this.config.baseUrl}${this.config.namespace}${postfix}`;
  }
  httpGet(url: string, options = {}) {
    return this.http.get(this.getFullUrl(url), options);
  }
  httpHead(url: string, options = {}) {
    return this.http.head(this.getFullUrl(url), options);
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(this.getFullUrl(url), options);
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(this.getFullUrl(url), body, options);
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(this.getFullUrl(url), body, options);
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(this.getFullUrl(url), body, options);
  }
}
