import {Injectable, Inject, Optional} from 'angular2/core';
import {Http} from 'angular2/http';
import {isPresent} from 'angular2/src/facade/lang';
import {CONST_EXPR} from 'angular2/src/facade/lang';
import {OpaqueToken} from 'angular2/core';

export const WP_API_BASE_URL: OpaqueToken = CONST_EXPR(new OpaqueToken('wpApiBaseUrl'));

@Injectable()
export class Parent {
    private _baseUrl: string = '';
    constructor(private http: Http, @Optional() @Inject(WP_API_BASE_URL) _baseUrl?: string) {

        if (isPresent(_baseUrl)) {
            this._baseUrl = _baseUrl;
        }
        console.log('_baseUrl', _baseUrl)
    }

    getList(suffix, params = {}, data = {}, headers = {}) { }

    get(suffix, params = {}, data = {}, headers = {}) {}

    requiredInput(functionName, inputs) {}
}
