import {
  Provider,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import 'rxjs';
import { Http, HttpModule } from '@angular/http';

import { WpApiApp, WpApiConfig } from './tokens';

import { WpApiPosts } from './Posts';
import { WpApiPages } from './Pages';
import { WpApiComments } from './Comments';
import { WpApiTypes } from './Types';
import { WpApiMedia } from './Media';
import { WpApiUsers } from './Users';
import { WpApiTaxonomies } from './Taxonomies';
import { WpApiStatuses } from './Statuses';
import { WpApiTerms } from './Terms';
import { WpApiCustom } from './Custom';

export { WpApiPosts } from './Posts';
export { WpApiPages } from './Pages';
export { WpApiComments } from './Comments';
export { WpApiTypes } from './Types';
export { WpApiMedia } from './Media';
export { WpApiUsers } from './Users';
export { WpApiTaxonomies } from './Taxonomies';
export { WpApiStatuses } from './Statuses';
export { WpApiTerms } from './Terms';
export { WpApiCustom } from './Custom';

export { WpApiApp, WpApiConfig } from './tokens';

export interface WpApiAppConfig {
  baseUrl: string;
  namespace?: string;
}

@NgModule({
  imports: [
    HttpModule
  ],
  exports: [
    HttpModule
  ],
  providers: [
    WpApiPosts,
    WpApiPages,
    WpApiComments,
    WpApiTypes,
    WpApiMedia,
    WpApiUsers,
    WpApiTaxonomies,
    WpApiStatuses,
    WpApiTerms,
    WpApiCustom
  ]
})
export class WpApiModule {
  static initializeApp(config: WpApiAppConfig): ModuleWithProviders {
    return {
      ngModule: WpApiModule,
      providers: [
        { provide: WpApiConfig, useValue: config }
      ]
    };
  }
}
