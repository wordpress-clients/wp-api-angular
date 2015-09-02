import 'angular';
import WpApi from '../dist/wp-api-angularjs.js';
import Config from './config.js';
import Controller from './controller.js';

let mod = angular.module('test', [
    'wp-api-angularjs'
]);

mod.config(Config);
mod.controller('MainController', Controller);
mod.run(($log) => {
    $log.info('test running');
});

export default mod = mod.name;
