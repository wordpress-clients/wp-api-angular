import { Injectable } from '@angular/core';
import { WpApiParent } from './parent.ts';
import { IWpApiCustom } from './interfaces';

@Injectable()
export class WpApiCustom extends WpApiParent {
  getInstance(entityName = null) {
    if (!entityName) {
      throw new Error(`getInstance needs an entity name`);
    }
    return new Custom(this.config, this.http, entityName);
  }
}

export class Custom extends WpApiParent implements IWpApiCustom {
  constructor(config, http, private entityName: string) {
    super(config, http);
  }
  getList(options = {}) {
    return this.httpGet(`/${this.entityName}`, options)
  }
  get(customId: number, options = {}) {
    return this.httpGet(`/${this.entityName}/${customId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}`, body, options)
  }
  update(customId: number, body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}/${customId}`, body, options)
  }
  delete(customId: number, options = {}) {
    return this.httpDelete(`/${this.entityName}/${customId}`, options)
  }
}
