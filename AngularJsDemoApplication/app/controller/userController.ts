/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../services/userservices.ts" />
/// <reference path="../model/userdetail.ts" />

interface IuserControllerScope extends ng.IScope {
    
    createNewUserDetail:(user:Model.UserDetail)=>void;
}
interface IuserController {
    
}
class userController implements  IuserController {
    
    static controllerId: string = "userController";
    static Instance;
    constructor(private $scope:IuserControllerScope,private  $log:ng.ILogService,private userServices:userServices,public $rootscope) {

        this.$scope.createNewUserDetail = (user: Model.UserDetail) => this.createNewUserDetail(user);

    }

private createNewUserDetail() {
    

}

}

app.controller(userController.controllerId, ["$scope", "userServices", "$log", "$rootscope", ($scope, userServices,$log,$rootScope) => {
    if (userController.Instance === undefined)
        userController.Instance = new userController($scope, userServices, $log, $rootScope);
    return userController.Instance;

}]);