module.exports = angular.module('wp-api-angularjs.test.controllers', [])
    .controller('MainController', function ($scope, $log, $wpApiPosts, $wpApiMedia, $wpApiTaxonomies, $wpApiUsers) {
        $log.info('Main Controller');

        /**
         * POSTS
         */
        $scope.getPosts = getPosts;
        $scope.getUncategorizedPosts = getUncategorizedPosts;
        $scope.getPost = getPost;
        $scope.createPost = createPost;
        $scope.updatePost = updatePost;
        $scope.removePost = removePost;

        function getPosts() {
            $log.info('getPosts');
            $wpApiPosts.$getList().then(function (posts) {
                $scope.getPostsStatus = 'OK';
            }).catch(function () {
                $scope.getPostsStatus = 'KO';
            });
        }

        function getUncategorizedPosts() {
            $log.info('getUncategorizedPosts');
            $wpApiPosts.$getList({
                'category_name': 'uncategorized'
            }).then(function (posts) {
                $scope.getUncategorizedPosts = 'OK';
            }).catch(function () {
                $scope.getUncategorizedPosts = 'KO';
            });
        }

        function getPost(id) {
            $log.info('getPost');
            $wpApiPosts.$get(id).then(function (post) {
                $scope.getPostStatus = 'OK';
            }).catch(function () {
                $scope.getPostStatus = 'KO';
            });
        }

        function createPost() {
            $log.info('createPost');
            $wpApiPosts.$create({
                title: 'test',
                content_raw: 'test content'
            }).then(function (post) {
                $scope.createPostStatus = 'OK';
            }).catch(function () {
                $scope.createPostStatus = 'KO';
            });
        }

        function updatePost(id) {
            $log.info('updatePost');
            $wpApiPosts.$get(id).then(function (post) {
                post.title = 'new title';
                return post.put();
            }).then(function (post) {
                $scope.updatePostStatus = 'OK';
            }).catch(function () {
                $scope.updatePostStatus = 'KO';
            });
        }

        function removePost(id) {
            $log.info('removePost');
            $wpApiPosts.$get(id).then(function (post) {
                return post.remove();
            }).then(function (post) {
                $scope.removePostStatus = 'OK';
            }).catch(function () {
                $scope.removePostStatus = 'KO';
            });
        }

        /**
         * MEDIA
         */
        $scope.getMediaList = getMediaList;
        $scope.getMedia = getMedia;
        $scope.createMedia = createMedia;


        function getMediaList() {
            $log.info('getMediaList');
            $wpApiMedia.$getList().then(function (media) {
                $scope.getMediaListStatus = 'OK';
            }).catch(function () {
                $scope.getMediaListStatus = 'KO';
            });
        }

        function getMedia(id) {
            $log.info('getMedia');
            $wpApiMedia.$get(id).then(function (media) {
                $scope.getMediaStatus = 'OK';
            }).catch(function () {
                $scope.getMediaStatus = 'KO';
            });
        }

        function createMedia() {
            $log.info('createMedia');
            $wpApiMedia.$create({}).then(function (media) {
                $scope.createMediaStatus = 'OK';
            }).catch(function () {
                $scope.createMediaStatus = 'KO';
            });
        }

        /**
         * USERS
         */
        $scope.getUsers = getUsers;
        $scope.getUser = getUser;
        $scope.getMe = getMe;
        $scope.createUser = createUser;
        $scope.updateUser = updateUser;
        $scope.removeUser = removeUser;

        function getUsers() {
            $log.info('getUsers');
            $wpApiUsers.$getList().then(function (users) {
                $scope.getUsersStatus = 'OK';
            }).catch(function () {
                $scope.getUsersStatus = 'KO';
            });
        }

        function getUser(id) {
            $log.info('getUser');
            $wpApiUsers.$get(id).then(function (user) {
                $scope.getUserStatus = 'OK';
            }).catch(function () {
                $scope.getUserStatus = 'KO';
            });
        }

        function getMe() {
            $log.info('getMe');
            $wpApiUsers.$getMe().then(function (user) {
                $scope.getMeStatus = 'OK';
            }).catch(function () {
                $scope.getMeStatus = 'KO';
            });
        }

        function createUser() {
            $log.info('createUser');
            $wpApiUsers.$create({
                title: 'test',
                content_raw: 'test content'
            }).then(function (post) {
                $scope.createUserStatus = 'OK';
            }).catch(function () {
                $scope.createUserStatus = 'KO';
            });
        }

        function updateUser(id) {
            $log.info('updateUser');
            $wpApiUsers.$get(id).then(function (user) {
                post.title = 'new title';
                return post.put();
            }).then(function (post) {
                $scope.updateUserStatus = 'OK';
            }).catch(function () {
                $scope.updateUserStatus = 'KO';
            });
        }

        function removeUser(id) {
            $log.info('removeUser');
            $wpApiUsers.$get(id).then(function (user) {
                return post.remove();
            }).then(function (post) {
                $scope.removeUserStatus = 'OK';
            }).catch(function () {
                $scope.removeUserStatus = 'KO';
            });
        }

        /**
         * TAXONOMIES
         */
        $scope.getTaxonomies = getTaxonomies;
        $scope.getTaxonomy = getTaxonomy;
        $scope.getTaxonomyTerms = getTaxonomyTerms;
        $scope.getTaxonomyTerm = getTaxonomyTerm;

        function getTaxonomies() {
            $log.info('getTaxonomies');
            $wpApiTaxonomies.$getList().then(function (taxonomies) {
                $scope.getTaxonomiesStatus = 'OK';
            }).catch(function () {
                $scope.getTaxonomiesStatus = 'KO';
            });
        }

        function getTaxonomy(taxonomy) {
            $log.info('getTaxonomy');
            $wpApiTaxonomies.$get(taxonomy).then(function (taxonomy) {
                $scope['getTaxonomy' + taxonomy + 'Status'] = 'OK';
            }).catch(function () {
                $scope['getTaxonomy' + taxonomy + 'Status'] = 'KO';
            });
        }

        function getTaxonomyTerms(taxonomy) {
            $log.info('getTaxonomyTerms');
            $wpApiTaxonomies.$getTermList(taxonomy).then(function (taxonomyTerms) {
                $scope['getTaxonomyTerms' + taxonomy + 'Status'] = 'OK';
            }).catch(function () {
                $scope['getTaxonomyTerms' + taxonomy + 'Status'] = 'KO';
            });
        }


        function getTaxonomyTerm(taxonomy, id) {
            $log.info('getTaxonomyTerm');
            $wpApiTaxonomies.$getTerm(taxonomy, id).then(function (taxonomyTerm) {
                $scope['getTaxonomyTerm' + taxonomy + 'Status'] = 'OK';
            }).catch(function () {
                $scope['getTaxonomyTerm' + taxonomy + 'Status'] = 'KO';
            });
        }
    });