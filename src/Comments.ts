import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWpApiComments } from './interfaces';
import { WpApiLoader } from './Loaders';
import { WpApiParent } from './Parent';


/******************************************************************************
* Service: WpApiComments
******************************************************************************/
@Injectable()
export class WpApiComments extends WpApiParent implements IWpApiComments {

  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/comments`, options)
  }
  get(commentId: number, options = {}) {
    return this.httpGet(`/comments/${commentId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/comments`, body, options)
  }
  update(commentId: number, body = {}, options = {}) {
    return this.httpPost(`/comments/${commentId}`, body, options)
  }
  delete(commentId: number, options = {}) {
    return this.httpDelete(`/comments/${commentId}`, options)
  }
}
