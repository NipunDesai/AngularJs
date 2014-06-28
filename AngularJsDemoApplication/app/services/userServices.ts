/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../model/userdetail.ts" />

interface IuserServices {
    
    createNewUserDetail:(userDetail:Model.UserDetail)=>void;
}

class userServices {
    private serviceId="userServices";
    private createNewUser;
    private $q;
    private $resource;

    constructor($resource: ng.resource.IResourceService, $q: ng.IQService) {
        console.log("Service controller call");
        this.$resource = $resource;
        this.$q = $q;
    }

}

app.factory("userService", ["$resource","$q",($resource, $q) => {

    return new userServices($resource, $q);
}]);