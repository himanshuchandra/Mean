app.factory("loginfact",function($http,$q){
    //var data= {key,value};
    var object = {
        registerUser:function(userObject){
          var defer = $q.defer(); 
            $http.post('http://localhost:1234/login',userObject).then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }
        
        };
    return object;
    });