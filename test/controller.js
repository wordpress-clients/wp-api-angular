import config from '../config.json';

export default function(
    $scope,
    $wpApiPosts,
    $wpApiPages,
    $wpApiMedia,
    $wpApiTypes,
    $wpApiStatuses,
    $wpApiTaxonomies,
    $wpApiTerms,
    $wpApiUsers,
    $wpApiComments,
    WpApi
) {

    'ngInject';

    var vm = this;
    vm.posts = {};
    vm.pages = {};
    vm.media = {};
    vm.types = {};
    vm.statuses = {};
    vm.taxonomies = {};
    vm.terms = {};
    vm.users = {};
    vm.comments = {};

    /*
     * POSTS
     */
    angular.forEach(config.postsMethods, (parameters, name) => {
        $wpApiPosts[name].apply($wpApiPosts, parameters)
            .then(() => vm.posts[name] = 'OK')
            .catch(() => vm.posts[name] = 'FAILED');
    });


    /*
     * PAGES
     */
    angular.forEach(config.pagesMethods, (parameters, name) => {
        $wpApiPages[name].apply($wpApiPages, parameters)
            .then(() => vm.pages[name] = 'OK')
            .catch(() => vm.pages[name] = 'FAILED');
    });


    /*
     * Media
     */

    angular.forEach(config.mediaMethods, (parameters, name) => {
        $wpApiMedia[name].apply($wpApiMedia, parameters)
            .then(() => vm.media[name] = 'OK')
            .catch(() => vm.media[name] = 'FAILED');
    });

    /*
     * Types
     */
    angular.forEach(config.typesMethods, (parameters, name) => {
        $wpApiTypes[name].apply($wpApiTypes, parameters)
            .then(() => vm.types[name] = 'OK')
            .catch(() => vm.types[name] = 'FAILED');
    });

    /*
     * Statuses
     */
    angular.forEach(config.statusesMethods, (parameters, name) => {
        $wpApiStatuses[name].apply($wpApiStatuses, parameters)
            .then(() => vm.statuses[name] = 'OK')
            .catch(() => vm.statuses[name] = 'FAILED');
    });

    /*
     * Taxonomies
     */
    angular.forEach(config.taxonomiesMethods, (parameters, name) => {
        $wpApiTaxonomies[name].apply($wpApiTaxonomies, parameters)
            .then(() => vm.taxonomies[name] = 'OK')
            .catch(() => vm.taxonomies[name] = 'FAILED');
    });

    /*
     * Terms
     */
    angular.forEach(config.termsMethods, (parameters, name) => {
        $wpApiTerms[name].apply($wpApiTerms, parameters)
            .then(() => vm.terms[name] = 'OK')
            .catch(() => vm.terms[name] = 'FAILED');
    });

    /*
     * Users
     */
    angular.forEach(config.usersMethods, (parameters, name) => {
        $wpApiUsers[name].apply($wpApiUsers, parameters)
            .then(() => vm.users[name] = 'OK')
            .catch(() => vm.users[name] = 'FAILED');
    });

    /*
     * Comments
     */
    angular.forEach(config.commentsMethods, (parameters, name) => {
        $wpApiComments[name].apply($wpApiComments, parameters)
            .then(() => vm.comments[name] = 'OK')
            .catch(() => vm.comments[name] = 'FAILED');
    });
}
