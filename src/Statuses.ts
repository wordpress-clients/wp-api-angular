import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiStatuses } from './interfaces';

@Injectable()
export class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
  getList(options = {}) {
    return this.httpGet(`/statuses`, options)
  }
  get(statusesName: string, options = {}) {
    return this.httpGet(`/statuses/${statusesName}`, options)
  }
}
