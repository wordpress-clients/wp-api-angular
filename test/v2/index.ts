import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {
  WPAPI_PROVIDERS,
  defaultWpApi
} from '../../lib/v2/index.ts'

import {App} from './app';

bootstrap(App, [
  WPAPI_PROVIDERS,
  defaultWpApi({
    baseUrl: 'hihi'
  })
]);
