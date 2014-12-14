module.exports = angular.module('wp-api-angularjs.test.controllers', [])
    .controller('MainController', function($scope, $log, $wpApiPosts) {
        $log.info('Main Controller');

        $scope.getPosts = getPosts;
        $scope.getPost = getPost;
        $scope.createPost = createPost;
        $scope.updatePost = updatePost;
        $scope.removePost = removePost;

        function getPosts() {
            $log.info('getPosts');
            $wpApiPosts.getList().then(function(posts) {
                $scope.getPostsStatus = 'OK';
            }).catch(function() {
                $scope.getPostsStatus = 'KO';
            });
        }

        function getPost() {
            $log.info('getPost');
            $wpApiPosts.one(188).get().then(function(post) {
                $scope.getPostStatus = 'OK';
            }).catch(function() {
                $scope.getPostStatus = 'KO';
            });
        }

        function createPost() {
            $log.info('createPost');
            $wpApiPosts.post({
                title: 'test',
                content_raw: 'test content'
            }).then(function(post) {
                $scope.createPostStatus = 'OK';
            }).catch(function() {
                $scope.createPostStatus = 'KO';
            });
        }

        function updatePost() {
            $log.info('updatePost');
            $wpApiPosts.one(188).get().then(function(post) {
                post.title = 'new title';
                return post.put();
            }).then(function(post) {
                $scope.updatePostStatus = 'OK';
            }).catch(function() {
                $scope.updatePostStatus = 'KO';
            });
        }

        function removePost() {
            $log.info('removePost');
            $wpApiPosts.one(188).get().then(function(post) {
                return post.remove();
            }).then(function(post) {
                $scope.removePostStatus = 'OK';
            }).catch(function() {
                $scope.removePostStatus = 'KO';
            });
        }
    });