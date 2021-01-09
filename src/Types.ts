import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWpApiTypes } from './interfaces';
import { WpApiLoader } from './Loaders';
import { WpApiParent } from './Parent';



@Injectable()
export class WpApiTypes extends WpApiParent implements IWpApiTypes {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/types`, options)
  }
  get(postType: string, options = {}) {
    return this.httpGet(`/types/${postType}`, options)
  }
}
