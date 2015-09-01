export default function($scope, $wpApiPosts, $wpApiPages) {
    'ngInject';

    var vm = this;
    vm.posts = {};
    vm.pages = {};

    /*
     * POSTS
     */

    $wpApiPosts.getList({
            page: 2,
            per_page: 2,
            "filter[orderby]": "date",
            "filter[order]": "desc",
        })
        .then(() => vm.posts.getList = 'OK')
        .catch(() => vm.posts.getList = 'KO');

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
