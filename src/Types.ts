import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiTypes } from './interfaces';

@Injectable()
export class WpApiTypes extends WpApiParent implements IWpApiTypes {
  getList(options = {}) {
    return this.httpGet(`/types`, options)
  }
  get(postType: string, options = {}) {
    return this.httpGet(`/types/${postType}`, options)
  }
}
