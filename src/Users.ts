import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWpApiUsers } from './interfaces';
import { WpApiLoader } from './Loaders';
import { WpApiParent } from './Parent';

@Injectable()
export class WpApiUsers extends WpApiParent implements IWpApiUsers {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/users`, options)
  }
  me(options = {}) {
    return this.httpGet(`/users/me`, options)
  }
  get(userId: number, options = {}) {
    return this.httpGet(`/users/${userId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/users`, body, options)
  }
  update(userId: number, body = {}, options = {}) {
    return this.httpPost(`/users/${userId}`, body, options)
  }
  delete(userId: number, options = {}) {
    return this.httpDelete(`/users/${userId}`, options)
  }
}
