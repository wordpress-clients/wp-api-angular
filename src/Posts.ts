import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiPosts } from './interfaces';

@Injectable()
export class WpApiPosts extends WpApiParent implements IWpApiPosts {
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
