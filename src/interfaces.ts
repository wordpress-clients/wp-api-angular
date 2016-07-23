import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

export interface WpApiAppConfig {
  baseUrl: string;
  namespace?: string;
}

export interface IParent {
  httpGet(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpHead(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpDelete(url: string, options?: RequestOptionsArgs): Observable<Response>;
  httpPost(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  httpPut(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  httpPatch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiPosts {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(postId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(postId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(postId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
  getCategoryList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  getCategory(postId: number, categoryId, options?: RequestOptionsArgs): Observable<Response>;
  getTagList(postId: number, options?: RequestOptionsArgs): Observable<Response>;
  getTag(postId: number, tagId, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiPages {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(pageId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(pageId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(pageId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiComments {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiTypes {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(postType: string, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiMedia {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(mediaId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiUsers {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  me(options?: RequestOptionsArgs): Observable<Response>;
  get(userId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(userId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(userId: number, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiTaxonomies {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiStatuses {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(statusesName: string, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(taxonomiesType: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(taxonomiesType: string, termId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
}


export interface IWpApiCustom {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(customId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(customId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(customId: number, options?: RequestOptionsArgs): Observable<Response>;
}
