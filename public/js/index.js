var _public = require('./_public.js');

var app = angular.module("app", ['_public']);

app.controller('appController', ['$scope', '_public', function ($scope, _public) {

    $scope.route = _public.route;
    $scope.pageName = '这是首页';
    console.log(_public.route);

}]);

angular.bootstrap(document, ['app']);