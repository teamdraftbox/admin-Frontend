angular.module("userServices",[])
.factory("User",["$http",function($http){
    var userFactory = {}
    userFactory.create = function(reg){
      return  $http.post("http://127.0.0.1:8080/api/user",reg)
    }
    return userFactory
}])

