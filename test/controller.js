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
        get: [2016],
        getMetaList: [2016],
        getMeta: [2016],
        getRevisionList: [2016],
        getRevision: [2016],
        getCategoryList: [2016],
        getCategory: [2016],
        getTagList: [2016],
        getTag: [2016]
    }

    $wpApiPosts.getList({
        page: 1,
        per_page: 1,
        "filter[orderby]": "date",
        "filter[order]": "desc",
    }).then(() => {

    })
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
