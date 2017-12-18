import { Http, HttpModule } from '@angular/http';
import { stripTrailingSlash } from './utils';

export abstract class WpApiLoader {
  abstract getWebServiceUrl(postfix: string): string;
  abstract baseUrl: string;
  abstract namespace: string;
}

export class WpApiStaticLoader implements WpApiLoader {
  completeUrl: string;
  constructor(
    private http: Http,
    private _baseUrl: string = 'http://changeYourDomainHere.com/wp-json',
    private _namespace: string = '/wp/v2'
  ) {
    this.completeUrl = `${stripTrailingSlash(this.baseUrl)}${this.namespace}`;
  }

  set baseUrl(val: string): void { }
  get baseUrl(): string { return this._baseUrl; }

  set namespace(val: string): void {}
  get namespace(): string { return this._namespace; }

  public getWebServiceUrl(postfix: string): string {
    return `${this.completeUrl}${postfix}`
  }
}
