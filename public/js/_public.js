var app = angular.module("_public", []);

app.factory('_public', [function () {
    return {
        route: [
            {
                name: '首页',
                url: '/'
            },
            {
                name: '子页',
                url: '/page'
            }
        ]
    };
}]);