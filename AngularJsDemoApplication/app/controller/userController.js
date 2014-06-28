/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../services/userservices.ts" />
/// <reference path="../model/userdetail.ts" />

var userController = (function () {
    function userController($scope, $log, userServices, $rootscope) {
        var _this = this;
        this.$scope = $scope;
        this.$log = $log;
        this.userServices = userServices;
        this.$rootscope = $rootscope;
        this.$scope.createNewUserDetail = function (user) {
            return _this.createNewUserDetail(user);
        };
    }
    userController.prototype.createNewUserDetail = function () {
    };
    userController.controllerId = "userController";
    return userController;
})();

app.controller(userController.controllerId, [
    "$scope", "userServices", "$log", "$rootscope", function ($scope, userServices, $log, $rootScope) {
        if (userController.Instance === undefined)
            userController.Instance = new userController($scope, userServices, $log, $rootScope);
        return userController.Instance;
    }]);
//# sourceMappingURL=userController.js.map
