import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWpApiStatuses } from './interfaces';
import { WpApiLoader } from './Loaders';
import { WpApiParent } from './Parent';

@Injectable()
export class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/statuses`, options)
  }
  get(statusesName: string, options = {}) {
    return this.httpGet(`/statuses/${statusesName}`, options)
  }
}
