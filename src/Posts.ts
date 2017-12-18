import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';

import { IWpApiPosts } from './interfaces';

@Injectable()
export class WpApiPosts extends WpApiParent implements IWpApiPosts {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: Http
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/posts`, options)
  }
  get(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/posts`, body, options)
  }
  update(postId: number, body = {}, options = {}) {
    return this.httpPost(`/posts/${postId}`, body, options)
  }
  delete(postId: number, options = {}) {
    return this.httpDelete(`/posts/${postId}`, options)
  }
  getMetaList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/meta`, options)
  }
  getMeta(postId: number, metaId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/meta/${metaId}`, options)
  }
  getRevisionList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/revisions`, options)
  }
  getRevision(postId: number, revisionId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/revisions/${revisionId}`, options)
  }
  getCategoryList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/category`, options)
  }
  getCategory(postId: number, categoryId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/category/${categoryId}`, options)
  }
  getTagList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/tag`, options)
  }
  getTag(postId: number, tagId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/tag/${tagId}`, options)
  }
}
