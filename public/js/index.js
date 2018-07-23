var app = angular.module("app", []);

app.controller('appController', ['$scope', function ($scope) {
    $scope.route = [
        {
            name: '首页',
            url: '/'
        },
        {
            name: '子页',
            url: '/page'
        }
    ];
    $scope.pageName = '这是首页';
}]);

angular.bootstrap(document, ['app']);