import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import "rxjs";
import { WpApiComments } from "./Comments";
import { WpApiCustom } from "./Custom";
import { WpApiLoader, WpApiStaticLoader } from "./Loaders";
import { WpApiMedia } from "./Media";
import { WpApiPages } from "./Pages";
import { WpApiPosts } from "./Posts";
import { WpApiStatuses } from "./Statuses";
import { WpApiTaxonomies } from "./Taxonomies";
import { WpApiTerms } from "./Terms";
import { WpApiTypes } from "./Types";
import { WpApiUsers } from "./Users";


export { WpApiComments } from "./Comments";
export { WpApiCustom } from "./Custom";
export { WpApiLoader, WpApiStaticLoader } from "./Loaders";
export { WpApiMedia } from "./Media";
export { WpApiPages } from "./Pages";
export { WpApiPosts } from "./Posts";
export { WpApiStatuses } from "./Statuses";
export { WpApiTaxonomies } from "./Taxonomies";
export { WpApiTerms } from "./Terms";
export { WpApiTypes } from "./Types";
export { WpApiUsers } from "./Users";

export function WpApiLoaderFactory(http: HttpClient) {
  return new WpApiStaticLoader(http);
}

/******************************************************************************
* Module: WpApiModule
******************************************************************************/
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
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
    WpApiCustom,
  ],
})
export class WpApiModule {

  public static forRoot(
    providedLoader: any = {
      provide: WpApiLoader,
      useFactory: WpApiLoaderFactory,
      deps: [HttpClient],
    }
  ): ModuleWithProviders<WpApiModule> {

    return {
      ngModule: WpApiModule,
      providers: [providedLoader],
    };

  }
}
