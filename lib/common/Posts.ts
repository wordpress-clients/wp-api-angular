export const createUrl(): string {
   return `/posts`};
export const getListUrl(): string {
   return `/posts`};
export const getUrl(postId: number): string {
   return `/posts/${postId}`};
export const updateUrl(postId: number): string {
   return `/posts/${postId}`};
export const deleteUrl(postId: number): string {
   return `/posts/${postId}`};
export const getMetaListUrl(postId: number): string {
   return `/posts/${postId}/meta`};
export const getMetaUrl(postId: number, metaId: number): string {
   return `/posts/${postId}/meta/${metaId}`};
export const getRevisionListUrl(postId: number): string {
   return `/posts/${postId}/revisions`};
export const getRevisionUrl(postId: number, revisionId: number): string {
   return `/posts/${postId}/revisions/${revisionId}`};
export const getCategoryListUrl(postId: number): string {
   return `/posts/${postId}/terms/category`};
export const getCategoryUrl(postId: number, categoryId: number): string
{ return `/posts/${postId}/terms/category/${categoryId}`};
export const getTagListUrl(postId: number): string {
   return `/posts/${postId}/terms/tag`};
export const getTagUrl(postId: number, tagId: number): string {
  return `/posts/${postId}/terms/tag/${tagId}`;
};
