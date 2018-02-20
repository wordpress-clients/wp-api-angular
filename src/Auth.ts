import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';

import { IWpApiAuth, ICredentials, IAuthCredentials } from './interfaces';

export class AuthSession {
  static saveSession(credentials: ICredentials) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }
  static getSession(): ICredentials {
    return JSON.parse(localStorage.getItem('credentials'));
  }
  static removeSession() {
    localStorage.removeItem('credentials');
  }
}

@Injectable()
export class WpApiAuth extends WpApiParent implements IWpApiAuth {

  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http,
  ) {
    super(wpApiLoader, http);
  }

  protected getWebServiceUrl(postfix: string): string {
    return super.getWebServiceUrl(postfix).replace(this.wpApiLoader.namespace, '/jwt-auth/v1');
  }

  saveSession(credentials: ICredentials) {
    AuthSession.saveSession(credentials);
  }
  getSession(): ICredentials {
    return AuthSession.getSession();
  }
  removeSession() {
    AuthSession.removeSession();
  }

  auth(authCredentials: IAuthCredentials, options = { headers: new Headers() }): Observable<Response> {
    if (!options.headers) {
      options.headers = new Headers();
    }
    options.headers.append('Authorization', '');
    return this.httpPost(`/token`, authCredentials, options);
  }
  validate(options = {}): Observable<Response> {
    return this.httpPost(`/token/validate`, {}, options);
  }

}

