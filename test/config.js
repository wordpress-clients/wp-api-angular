import config from '../config.json';

export default function(WpApiProvider) {
    'ngInject';
    WpApiProvider.setBaseUrl(config.baseUrl);

    // basic
    // Use this should only be used for testing as it embed credentials in the application code.
    // Please check the README.md file
    if (config.basic.enabled && config.basic.login && config.basic.password) {
        WpApiProvider.setBasicCredentials(config.basic.login, config.basic.password);
    }

    WpApiProvider.setDefaultHttpProperties({
        timeout: 20000
    });

    WpApiProvider.addInterceptor(() => {
        return {
            response: (response) => {
                console.log('response', response);
                return response;
            }
        }
    });
}
