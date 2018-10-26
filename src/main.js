// Styles
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
import angular from 'angular';

// Modules
import app from './app/app.module';

angular.module('main', [app]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
