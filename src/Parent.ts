import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiLoader } from './Loaders';
import { stripTrailingSlash } from './utils';

import { IParent } from './interfaces';


@Injectable()
export class WpApiParent implements IParent {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) { }

  protected getWebServiceUrl(postfix: string): string {
    return this.wpApiLoader.getWebServiceUrl(url);
  }

  httpGet(url: string, options = {}) {
    return this.http.get(this.getWebServiceUrl(url), options);
  }
  httpHead(url: string, options = {}) {
    return this.http.head(this.getWebServiceUrl(url), options);
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(this.getWebServiceUrl(url), options);
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(this.getWebServiceUrl(url), body, options);
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(this.getWebServiceUrl(url), body, options);
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(this.getWebServiceUrl(url), body, options);
  }
}
