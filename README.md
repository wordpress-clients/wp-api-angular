wp-api-angularjs
================

Angular2 services to consume [WP-API v2](http://v2.wp-api.org/)

If you want to use AngularJS v1, here is the latest version: [v2.0.0-rc3](https://github.com/shprink/wp-api-angularjs/tree/v2.0.0-rc3)

## Installation

### npm

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
    baseUrl: "http://YOUR_DOMAIN/wp-json/"
  })
]);

```

## Authentication

TO BO DEFINED

#### During configuration

You can also set basic credentials during the configuration but use this should only be used for testing as it embed credentials in the application code.

```
.config(function(WpApiProvider){
    WpApiProvider.setBasicCredentials(<login>, <password>);
});
```

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
