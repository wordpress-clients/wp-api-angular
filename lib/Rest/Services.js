module.exports = angular.module('wp-api-angularjs.services', [
    require('./Posts').name,
    require('./Media').name,
    require('./Users').name,
    require('./Taxonimies').name
]);