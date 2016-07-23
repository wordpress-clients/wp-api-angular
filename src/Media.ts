import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiMedia } from './interfaces';

@Injectable()
export class WpApiMedia extends WpApiParent implements IWpApiMedia {
  getList(options = {}) {
    return this.httpGet(`/media`, options)
  }
  get(mediaId: number, options = {}) {
    return this.httpGet(`/media/${mediaId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/media`, body, options)
  }
  update(mediaId: number, body = {}, options = {}) {
    return this.httpPost(`/media/${mediaId}`, body, options)
  }
  delete(mediaId: number, options = {}) {
    return this.httpDelete(`/media/${mediaId}`, options)
  }
}
