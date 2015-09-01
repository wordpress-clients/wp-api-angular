import Provider from './provider.js';
import Posts from './posts.service.js';
import Pages from './pages.service.js';

let mod = angular.module('wp-api-angularjs', []);

mod.provider('WpApi', Provider);
mod.service('$wpApiPosts', Posts);
mod.service('$wpApiPages', Pages);

export default mod = mod.name;
