export default class {
    constructor(WpApi, $http) {
        'ngInject';

        this.baseUrl = WpApi.getBaseUrl();
        this.defaultHttpProperties = WpApi.getDefaultHttpProperties();
        this.$http = $http;

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
