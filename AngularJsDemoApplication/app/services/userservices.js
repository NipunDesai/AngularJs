/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../model/userdetail.ts" />

var userServices = (function () {
    function userServices($resource, $q) {
        this.serviceId = "userServices";
        console.log("Service controller call");
        this.$resource = $resource;
        this.$q = $q;
    }
    return userServices;
})();

app.factory("userService", [
    "$resource", "$q", function ($resource, $q) {
        return new userServices($resource, $q);
    }]);
//# sourceMappingURL=userservices.js.map
