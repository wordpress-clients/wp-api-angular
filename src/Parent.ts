import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WpApiAppConfig, IParent } from './interfaces';

@Injectable()
export class WpApiParent implements IParent {
  constructor(
    private config: WpApiAppConfig,
    private http: Http
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
