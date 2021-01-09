import { Observable } from "rxjs";
import { RequestOptionsArgs } from './RequestOptionsArgs';

export interface IParent {
  httpGet(url: string, options?: RequestOptionsArgs): Observable<Object>;
  httpHead(url: string, options?: RequestOptionsArgs): Observable<Object>;
  httpDelete(url: string, options?: RequestOptionsArgs): Observable<Object>;
  httpPost(url: string, body: any, options?: RequestOptionsArgs): Observable<Object>;
  httpPut(url: string, body: any, options?: RequestOptionsArgs): Observable<Object>;
  httpPatch(url: string, body: any, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiPosts {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(postId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  getMetaList(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  getMeta(postId: number, metaId: number, options?: RequestOptionsArgs): Observable<Object>;
  getRevisionList(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  getRevision(postId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Object>;
  getCategoryList(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  getCategory(postId: number, categoryId, options?: RequestOptionsArgs): Observable<Object>;
  getTagList(postId: number, options?: RequestOptionsArgs): Observable<Object>;
  getTag(postId: number, tagId, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiPages {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(pageId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(pageId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(pageId: number, options?: RequestOptionsArgs): Observable<Object>;
  getMetaList(pageId: number, options?: RequestOptionsArgs): Observable<Object>;
  getMeta(pageId: number, metaId: number, options?: RequestOptionsArgs): Observable<Object>;
  getRevisionList(pageId: number, options?: RequestOptionsArgs): Observable<Object>;
  getRevision(pageId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiComments {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiTypes {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(postType: string, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiMedia {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(mediaId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(mediaId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(mediaId: number, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiUsers {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  me(options?: RequestOptionsArgs): Observable<Object>;
  get(userId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(userId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(userId: number, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiTaxonomies {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiStatuses {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(statusesName: string, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Object>;
  get(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(taxonomiesType: string, body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(taxonomiesType: string, termId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Object>;
}

export interface IWpApiCustom {
  getList(options?: RequestOptionsArgs): Observable<Object>;
  get(customId: number, options?: RequestOptionsArgs): Observable<Object>;
  create(body: any, options?: RequestOptionsArgs): Observable<Object>;
  update(customId: number, body: any, options?: RequestOptionsArgs): Observable<Object>;
  delete(customId: number, options?: RequestOptionsArgs): Observable<Object>;
}
