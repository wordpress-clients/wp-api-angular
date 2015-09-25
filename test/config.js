import config from '../config.json';

export default function(WpApiProvider) {
    'ngInject';
    WpApiProvider.setBaseUrl(config.baseUrl);

    WpApiProvider.setAuthenticationType(config.authType);
    // oauth1
    WpApiProvider.setOauth1Description({
        request: config.oauth1.request
    })
    WpApiProvider.setOauth1Credentials(config.oauth1.key, config.oauth1.Secret, config.oauth1.callback);
    // basic
    WpApiProvider.setBasicCredentials(config.basic.login, config.basic.password);

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
