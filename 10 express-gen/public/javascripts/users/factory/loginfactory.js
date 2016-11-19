userapp.factory("loginfactory",function($http,$q){
    var factoryObject = {};
    factoryObject.doLogin=function(userObject){
       var defer = $q.defer(); $http.post('http://localhost:1234/users/checklogin',userObject).then(function(data){
            defer.resolve(data)
        },function(error){
            defer.reject(error);
        });
    return defer.promise;
    }
    return factoryObject;
})