import {
  Provider,
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import 'rxjs';
import { Http, HttpModule } from '@angular/http';

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
import { WpApiLoader, WpApiStaticLoader } from './Loaders';

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
export { WpApiLoader, WpApiStaticLoader } from './Loaders';

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http);
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
  static forRoot(providedLoader: any = {
    provide: WpApiLoader,
    useFactory: WpApiLoaderFactory,
    deps: [Http]
  }): ModuleWithProviders {
    return {
      ngModule: WpApiModule,
      providers: [
        providedLoader
      ]
    };
  }
}
