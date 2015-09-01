export default function($scope, $wpApiPosts, $wpApiPages) {
    'ngInject';

    var vm = this;
    vm.posts = {};
    vm.pages = {};

    /*
     * POSTS
     */

    let postsMethods = {
        getList: [{
            page: 1,
            per_page: 1,
            "filter[orderby]": "date",
            "filter[order]": "desc",
        }],
        get: [188],
        getMetaList: [188],
        getMeta: [188, 1],
        getRevisionList: [188],
        getRevision: [188,1],
        getCategoryList: [188],
        getCategory: [188, 2],
        getTagList: [188],
        getTag: [188, 94]
    };

    angular.forEach(postsMethods, (parameters, name) => {
        $wpApiPosts[name].apply($wpApiPosts, parameters)
            .then(() => vm.posts[name] = 'OK')
            .catch(() => vm.posts[name] = 'KO');
    });






    /*
     * PAGES
     */

    $wpApiPages.getList({
            page: 2,
            per_page: 2,
            "filter[orderby]": "date",
            "filter[order]": "desc",
        })
        .then(() => vm.pages.getList = 'OK')
        .catch(() => vm.pages.getList = 'KO');
}
