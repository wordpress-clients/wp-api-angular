export default function($scope, $wpApiPosts) {
    'ngInject';

    var vm = this;

    init();

    function init() {
        console.log('eee');
        $wpApiPosts.getPosts({
            page: 2,
            per_page: 2,
            "filter[orderby]": "date",
            "filter[order]": "desc",
        });
    }
}
