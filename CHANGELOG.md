<a name="3.0.0-beta7></a>
### 3.0.0-beta7 (2017-02-04)

* BREAKING CHANGE: `WpApiModule.initializeApp` is now `WpApiModule.forRoot`

Follow the following docs to migrate to the new way to bootstrap your module:

An exported function instead `WpApiLoaderFactory` is mandatory to be used with [AoT compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) or [Ionic 2](http://ionic.io/).


```js
import { Http } from '@angular/http';
import { 
  WpApiModule
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://YOUR_DOMAIN/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
```

<a name="3.0.0-beta6></a>
### 3.0.0-beta6 (2017-02-01)

export missing tokens to fix aot in ionic cli

<a name="3.0.0-beta5"></a>
### 3.0.0-beta5 (2017-02-01)

Fix config and http injection <https://github.com/shprink/wp-api-angular/issues/20>

<a name="3.0.0-beta4"></a>
### 3.0.0-beta4 (2017-01-27)

Add AOT support for GOOD this time! <https://github.com/shprink/wp-api-angular/issues/19>

<a name="3.0.0-beta3"></a>
### 3.0.0-beta3 (2017-01-22)

Add AOT support <https://github.com/shprink/wp-api-angular/issues/19>

<a name="3.0.0-beta2"></a>
### 3.0.0-beta2 (2016-11-14)

Remove `d.ts` extensions <https://github.com/shprink/wp-api-angular/issues/15>

<a name="3.0.0-alpha8"></a>
### 3.0.0-alpha8 (2016-10-30)

Upgrade to Angular 2.0.0 / NgModules

<a name="3.0.0-alpha7"></a>
### 3.0.0-alpha7 (2016-07-30)

Making sure it is usable via TypeScript as well (export d.ts files).


<a name="3.0.0-alpha2"></a>
### 3.0.0-alpha2 (2016-07-24)

Adding peer dependencies 

<a name="3.0.0-alpha1"></a>
### 3.0.0-alpha1 (2016-07-23)

First version for ng2. 
