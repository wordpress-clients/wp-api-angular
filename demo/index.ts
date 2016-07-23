import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/toPromise';
import {
  WPAPI_PROVIDERS,
  defaultWpApi
} from 'wp-api-angularjs'
let config = require('../config.json');

import {App} from './app';

bootstrap(App, [
  WPAPI_PROVIDERS,
  defaultWpApi({
    baseUrl: config.baseUrl
  })
]);
