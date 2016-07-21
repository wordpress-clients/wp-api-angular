export default class {
    constructor($injector) {
        'ngInject';

        this.baseUrl = $injector.get('WpApi').getBaseUrl();
        this.defaultHttpProperties = $injector.get('WpApi').getDefaultHttpProperties();
        this.$http = $injector.get('$http');

    }

    getList(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.extend({}, this.defaultHttpProperties, {
            method: 'GET',
            url: this.baseUrl + suffix,
            params,
            data,
            headers
        }));
    }

    get(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.extend({}, this.defaultHttpProperties, {
            method: 'GET',
            url: this.baseUrl + suffix,
            params,
            data,
            headers
        }));
    }
    
    post(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.extend({}, this.defaultHttpProperties, {
            method: 'POST',
            url: this.baseUrl + suffix,
            params,
            data,
            headers,
        }));
    }

    delete(suffix, params = {}, data = {}, headers = {}) {
        return this.$http(angular.extend({}, this.defaultHttpProperties, {
            method: 'DELETE',
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
