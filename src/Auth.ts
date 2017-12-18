import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';

export interface IWpApiAuth {
  auth(authCredentials: IAuthCredentials, options?: RequestOptionsArgs): Observable<Response>;
  credentials(options?: RequestOptionsArgs): Observable<Response>;
}

export interface ICredentials {
  token?: string;
  email?: string;
}

export interface IAuthCredentials {
  username: string;
  password: string;
}

@Injectable()
export class WpApiAuth extends WpApiParent implements IWpApiAuth {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) {
    super(wpApiLoader, http);
  }

  protected getWebServiceUrl(postfix: string): string {
    return super.getWebServiceUrl(postfix).replace(this.wpApiLoader.namespace, '/jwt-auth/v1');
  }

  auth(authCredentials: IAuthCredentials, options = {}): Observable<Response> {
    return this.httpPost(`/token`, authCredentials, options);
  }
  credentials(options?: RequestOptionsArgs): Observable<Response> {
    return this.httpPost(`/token/validate`, {}, options);
  }
}

