import { RequestOptionsArgs } from '@angular/http/src/interfaces.d.ts';
import { Response } from '@angular/http/src/static_response.d.ts';

export interface WpApiAppConfig {
  baseUrl: string;
  namespace?: string;
}

export interface IWpApiPosts {
  getList(options?: RequestOptionsArgs): Promise<Response>;
  get(postId, options?: RequestOptionsArgs): Promise<Response>;
  create(body: any, options?: RequestOptionsArgs): Promise<Response>;
  update(postId, body: any, options?: RequestOptionsArgs): Promise<Response>;
  delete(postId, options?: RequestOptionsArgs): Promise<Response>;
  getMetaList(postId, options?: RequestOptionsArgs): Promise<Response>;
  getMeta(postId, metaId, options?: RequestOptionsArgs): Promise<Response>;
  getRevisionList(postId, options?: RequestOptionsArgs): Promise<Response>;
  getRevision(postId, revisionId, options?: RequestOptionsArgs): Promise<Response>;
  getCategoryList(postId, options?: RequestOptionsArgs): Promise<Response>;
  getCategory(postId, categoryId, options?: RequestOptionsArgs): Promise<Response>;
  getTagList(postId, options?: RequestOptionsArgs): Promise<Response>;
  getTag(postId, tagId, options?: RequestOptionsArgs): Promise<Response>;
}
