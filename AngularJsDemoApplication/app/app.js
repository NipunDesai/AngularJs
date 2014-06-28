/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var apiPaths = {
    createNewUser: "api/user/createNewUser"
};

var app = angular.module('app', [
    "ngResource",
    "ngRoute"
]);

app.config(function ($routeProvider) {
    $routeProvider.when("/UserDetail", {
        templateUrl: '/Templates/UserDetail.html',
        controller: "userController"
    });
});
//# sourceMappingURL=app.js.map
