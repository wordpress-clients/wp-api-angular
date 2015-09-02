import Provider from './provider.js';
import Posts from './posts.service.js';
import Pages from './pages.service.js';
import Media from './media.service.js';
import Types from './types.service.js';
import Statuses from './statuses.service.js';
import Taxonomies from './taxonomies.service.js';
import Terms from './terms.service.js';
import Users from './users.service.js';
import Comments from './comments.service.js';

let mod = angular.module('wp-api-angularjs', []);

mod.provider('WpApi', Provider);
mod.service('$wpApiPosts', Posts);
mod.service('$wpApiPages', Pages);
mod.service('$wpApiMedia', Media);
mod.service('$wpApiTypes', Types);
mod.service('$wpApiStatuses', Statuses);
mod.service('$wpApiTaxonomies', Taxonomies);
mod.service('$wpApiTerms', Terms);
mod.service('$wpApiUsers', Users);
mod.service('$wpApiComments', Comments);

export default mod = mod.name;
