<p align="center">
  <h1 align="center">wp-api-angular</h1>
  <p align="center">Angular >=2 services for WordPress >= 4.7 Rest API</p>
</p>

================

[![Join the chat at https://gitter.im/shprink/wp-api-angular](https://badges.gitter.im/shprink/wp-api-angular.svg)](https://gitter.im/shprink/wp-api-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular2 services to consume [WP-API v2](http://v2.wp-api.org/)

[Live Demo](https://plnkr.co/edit/hqE4bvbM6HXql5Insjx8?p=preview)

If you want to use AngularJS v1, here is the latest version: [v2.0.0-rc3](https://www.npmjs.com/package/wp-api-angularjs). `npm i wp-api-angularjs@v2.0.0-rc3`

## Installation

```shell
npm install -g typings
npm install wp-api-angular
```

### TypeScript

Nothing special if you use TS

### UMD

UMD files are available `wp-api-angular.umd.js` and `wp-api-angular.umd.min.js`, the [Live Demo](https://plnkr.co/edit/hqE4bvbM6HXql5Insjx8?p=preview) uses them with systemJS

## Bootstrap


```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WpApiModule } from 'wp-api-angular'
import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.initializeApp({
      baseUrl: "http://YOUR_DOMAIN/wp-json/",
      namespace: '/wp/v2' // (optional, default: '/wp/v2')
    })
  ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule { }
```

## API

Every method return an Obervable. If you want to get a Promise you will need to add the rxjs `toPromise` operator:

```js
import 'rxjs/add/operator/toPromise';

class Test {
  constructor(private wpApiPosts: WpApiPosts) {
    this.wpApiPosts.getList()
      .toPromise()
      .then(response => response.json())
      .then(body => {})
      .catch(error => {})
  }
}

```

### RequestOptionsArgs

Every request can have an optional [`RequestOptionsArgs`](https://angular.io/docs/ts/latest/api/http/index/RequestOptionsArgs-interface.html) object.

```js
class RequestOptionsArgs {
  url : string
  method : string|RequestMethod
  search : string|URLSearchParams
  headers : Headers
  body : any
  withCredentials : boolean
}
```

This is where you can add query string to your request or change the headers (see below).

```
import { Headers } from '@angular/http';

const headers = new Headers({
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Max-Age': '1728000',
  'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
  'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
});

wpApiPosts.getList({ headers });
```

### WpApiPosts

```ts
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
```

### WpApiPages

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(pageId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMetaList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getMeta(pageId: number, metaId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevisionList(pageId: number, options?: RequestOptionsArgs): Observable<Response>;
  getRevision(pageId: number, revisionId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiComments

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiTypes

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(postType: string, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiMedia

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(mediaId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(mediaId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiUsers

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  me(options?: RequestOptionsArgs): Observable<Response>;
  get(userId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(userId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(userId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiTaxonomies

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiStatuses

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(statusesName: string, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiTerms

`taxonomiesType` can be `tags`, `categories` and more.

```ts
  getList(taxonomiesType: string, options?: RequestOptionsArgs): Observable<Response>;
  get(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(taxonomiesType: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(taxonomiesType: string, termId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(taxonomiesType: string, termId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### WpApiCustom

```ts
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(customId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(customId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(customId: number, options?: RequestOptionsArgs): Observable<Response>;
```

## Authentication

TO BE DEFINED

## Contribute

```shell
npm install
cp config.dist.json config.json

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page
npm start
```

Open ```http://localhost:8080```
