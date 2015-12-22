import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';

export Parent class {
    constructor(@Inject(Http) http:Http) {


        this.baseUrl = $injector.get('WpApi').getBaseUrl();
        this.defaultHttpProperties = $injector.get('WpApi').getDefaultHttpProperties();
        this.$http = $injector.get('$http');

    }

    getList(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.merge({}, this.defaultHttpProperties, {
            method: 'GET',
            url: this.baseUrl + suffix,
            params,
            data,
            headers
        }));
    }

    get(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.merge({}, this.defaultHttpProperties, {
            method: 'GET',
            url: this.baseUrl + suffix,
            params,
            data,
            headers
        }));
    }

    requiredInput(functionName, inputs) {
        angular.forEach(inputs, (value, name) => {
            if (typeof value !== 'undefined') return;
            throw new Error(`Parameter ${name} from function ${functionName} is required`);
        });
    }
}
