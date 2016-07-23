import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiTaxonomies } from './interfaces';

@Injectable()
export class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
