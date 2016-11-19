userapp.controller("loginctrl",function($scope,loginfactory){
    $scope.user = {};
    $scope.doLogin=function(){
        
        console.log("User is ",$scope.user.userid+" "+$scope.user.password);
        
        var promise = loginfactory.doLogin($scope.user);  
        promise.then(function(data){
            $scope.data = data.data;
        },function(error){
            $scope.error = error;
        })
    }
})