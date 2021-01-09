import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWpApiTaxonomies } from './interfaces';
import { WpApiLoader } from './Loaders';
import { WpApiParent } from './Parent';




@Injectable()
export class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
