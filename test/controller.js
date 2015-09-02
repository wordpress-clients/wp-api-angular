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
    $wpApiComments
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

    let postsMethods = {
        getList: [{
            per_page: 1
        }],
        get: [188],
        getMetaList: [188],
        getMeta: [188, 1],
        getRevisionList: [188],
        getRevision: [188, 1],
        getCategoryList: [188],
        getCategory: [188, 2],
        getTagList: [188],
        getTag: [188, 94]
    };

    angular.forEach(postsMethods, (parameters, name) => {
        $wpApiPosts[name].apply($wpApiPosts, parameters)
            .then(() => vm.posts[name] = 'OK')
            .catch(() => vm.posts[name] = 'FAILED');
    });


    /*
     * PAGES
     */

    let pagesMethods = {
        getList: [{
            per_page: 1
        }],
        get: [2],
        getMetaList: [2],
        getMeta: [2, 1],
        getRevisionList: [2],
        getRevision: [2, 1]
    };

    angular.forEach(pagesMethods, (parameters, name) => {
        $wpApiPages[name].apply($wpApiPages, parameters)
            .then(() => vm.pages[name] = 'OK')
            .catch(() => vm.pages[name] = 'FAILED');
    });


    /*
     * Media
     */

    let mediaMethods = {
        getList: [{
            per_page: 1
        }],
        get: [827]
    };

    angular.forEach(mediaMethods, (parameters, name) => {
        $wpApiMedia[name].apply($wpApiMedia, parameters)
            .then(() => vm.media[name] = 'OK')
            .catch(() => vm.media[name] = 'FAILED');
    });

    /*
     * Types
     */

    let typesMethods = {
        getList: [{
            per_page: 1
        }],
        get: ['attachment']
    };

    angular.forEach(typesMethods, (parameters, name) => {
        $wpApiTypes[name].apply($wpApiTypes, parameters)
            .then(() => vm.types[name] = 'OK')
            .catch(() => vm.types[name] = 'FAILED');
    });

    /*
     * Statuses
     */

    let statusesMethods = {
        getList: [],
        get: ['publish']
    };

    angular.forEach(statusesMethods, (parameters, name) => {
        $wpApiStatuses[name].apply($wpApiStatuses, parameters)
            .then(() => vm.statuses[name] = 'OK')
            .catch(() => vm.statuses[name] = 'FAILED');
    });

    /*
     * Taxonomies
     */

    let taxonomiesMethods = {
        getList: [],
        get: ['category']
    };

    angular.forEach(taxonomiesMethods, (parameters, name) => {
        $wpApiTaxonomies[name].apply($wpApiTaxonomies, parameters)
            .then(() => vm.taxonomies[name] = 'OK')
            .catch(() => vm.taxonomies[name] = 'FAILED');
    });

    /*
     * Terms
     */

    let termsMethods = {
        getCategoryList: [],
        getCategory: [2],
        getTagList: [],
        getTag: [53]
    };

    angular.forEach(termsMethods, (parameters, name) => {
        $wpApiTerms[name].apply($wpApiTerms, parameters)
            .then(() => vm.terms[name] = 'OK')
            .catch(() => vm.terms[name] = 'FAILED');
    });

    /*
     * Users
     */

    let usersMethods = {
        getList: [],
        get: [1],
        me: []
    };

    angular.forEach(usersMethods, (parameters, name) => {
        $wpApiUsers[name].apply($wpApiUsers, parameters)
            .then(() => vm.users[name] = 'OK')
            .catch(() => vm.users[name] = 'FAILED');
    });

    /*
     * Comments
     */

    let commentsMethods = {
        getList: [],
        get: [1]
    };

    angular.forEach(commentsMethods, (parameters, name) => {
        $wpApiComments[name].apply($wpApiComments, parameters)
            .then(() => vm.comments[name] = 'OK')
            .catch(() => vm.comments[name] = 'FAILED');
    });
}
