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
  get(postId, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(postId, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(postId, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(postId, metaId, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(postId, revisionId, options?: RequestOptionsArgs): Observable<Response>;
  getCategoryList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getCategory(postId, categoryId, options?: RequestOptionsArgs): Observable<Response>;
  getTagList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getTag(postId, tagId, options?: RequestOptionsArgs): Observable<Response>;
}

export interface IWpApiPages {
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(postId, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(postId, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(postId, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(postId, metaId, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(postId, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(postId, revisionId, options?: RequestOptionsArgs): Observable<Response>;
}
