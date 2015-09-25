import config from '../config.json';

export default function(WpApiProvider) {
    'ngInject';
    WpApiProvider.setBaseUrl(config.baseUrl);
}
