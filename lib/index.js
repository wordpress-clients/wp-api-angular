import Provider from './provider.js';

import Posts from './posts/posts.module.js';

let mod = angular.module('wp-api-angularjs', [
    Posts
]);

mod.provider('WpApi', Provider);

export default mod = mod.name;
