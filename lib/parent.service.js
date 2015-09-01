export default class {
    constructor(WpApi, $http) {
        'ngInject';

        this.baseUrl = WpApi.getBaseUrl();
        this.$http = $http;
    }

    getList(suffix, params = {}, data = {}, headers = {}) {
        return this.$http.get(this.baseUrl + suffix, {
            params,
            data,
            headers
        });
    }

    get(suffix, params = {}, data = {}, headers = {}) {
        return this.$http.get(this.baseUrl + suffix, {
            params,
            data,
            headers
        });
    }
}
