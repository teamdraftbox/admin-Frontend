angular.module("authServices",[])
.factory("Auth",function($http,authToken){
   var  authFactory = {}
   authFactory.logMeIn = function(loginData){
     console.log(loginData)
      return $http.post("http://127.0.0.1:8080/api/authenticate",loginData)
      .then(
         function(data){
           console.log(data)
         authToken.setToken(data.data.token)
            return data
         }
         )
   }
    authFactory.isLoggedIn = function(){
     if(authToken.getToken()){
        return true
     }else{
        return false
     }
   }
   authFactory.logout =function (){
      authToken.setToken()
   }
   authFactory.getUser = function() {
    return $http.post("http://127.0.0.1:8080/api/userdata")
   }
   
   return authFactory
})


.factory("authToken",function($window){
   var tokenFactory = {}
   tokenFactory.setToken = function (token){
      if(token){
      $window.localStorage.setItem("token",token)}else{
       $window.localStorage.removeItem("token")
      }
   }
   tokenFactory.getToken = function (){
     return $window.localStorage.getItem("token")
   }
   
   return tokenFactory
})
.factory("Interceptor",function(authToken){
   var  interceptorfactory = {}
   interceptorfactory.request = function (config){
      var token  = authToken.getToken()
      if(token){ config.headers["x-access-token"] = token}
      return config
   }
   return  interceptorfactory
})



