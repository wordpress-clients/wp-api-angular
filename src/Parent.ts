import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';
import { WpApiAppConfig } from './interfaces';

interface IParent {
  httpGet(url: string, options?: RequestOptionsArgs): Promise<Response>;
  httpHead(url: string, options?: RequestOptionsArgs): Promise<Response>;
  httpDelete(url: string, options?: RequestOptionsArgs): Promise<Response>;
  httpPost(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
  httpPut(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
  httpPatch(url: string, body: any, options?: RequestOptionsArgs): Promise<Response>;
}

@Injectable()
export class WpApiParent implements IParent {
  constructor(
    private config: WpApiAppConfig,
    private http: Http
  ) {}

  httpGet(url: string, options = {}) {
    return this.http.get(`${this.config.baseUrl}${this.config.namespace}${url}`, options).toPromise();
  }
  httpHead(url: string, options = {}) {
    return this.http.head(`${this.config.baseUrl}${this.config.namespace}${url}`, options).toPromise();
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(`${this.config.baseUrl}${this.config.namespace}${url}`, options).toPromise();
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(`${this.config.baseUrl}${this.config.namespace}${url}`, body, options).toPromise();
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(`${this.config.baseUrl}${this.config.namespace}${url}`, body, options).toPromise();
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(`${this.config.baseUrl}${this.config.namespace}${url}`, body, options).toPromise();
  }
}
