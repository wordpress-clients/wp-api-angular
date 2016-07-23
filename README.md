wp-api-angularjs
================

Angular2 services to consume [WP-API v2](http://v2.wp-api.org/)

If you want to use AngularJS v1, here is the latest version: [v2.0.0-rc3](https://github.com/shprink/wp-api-angularjs/tree/v2.0.0-rc3)

## Installation

### Prerequisite 

make sure you have those packages installed too:

- '@angular/core'
- 'rxjs'
- '@angular/http'

### via npm

```
npm install wp-api-angularjs@v3.0.x
```

## Bootstrap


```
import {
  WPAPI_PROVIDERS,
  defaultWpApi
} from 'wp-api-angularjs';

import {App} from './app';

bootstrap(App, [
  WPAPI_PROVIDERS,
  defaultWpApi({
    baseUrl: "http://YOUR_DOMAIN/wp-json/",
    namespace: '/wp/v2' // (optional, default: '/wp/v2')
  })
]);

```

## API


### WpApiPosts

```
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

```
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

```
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
  create(body: any, options?: RequestOptionsArgs): Observable<Response>;
  update(commentId: number, body: any, options?: RequestOptionsArgs): Observable<Response>;
  delete(commentId: number, options?: RequestOptionsArgs): Observable<Response>;
```

### IWpApiTypes

```
  getList(options?: RequestOptionsArgs): Observable<Response>;
  get(postType: string, options?: RequestOptionsArgs): Observable<Response>;
```

## Authentication

TO BE DEFINED

## Contribute

```
npm install
cp config.dist.json config.json

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page and the doc
npm run devserver
```

Open ```http://localhost:8080```
