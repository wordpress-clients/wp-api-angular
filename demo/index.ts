import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {
  WPAPI_PROVIDERS,
  defaultWpApi
} from '../src/index.ts'
let config = require('../config.json');

import {App} from './app';

bootstrap(App, [
  WPAPI_PROVIDERS,
  defaultWpApi({
    baseUrl: config.baseUrl
  })
]);
