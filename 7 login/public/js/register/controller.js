app.controller("regctrl",function($scope,regfactory){
    $scope.doRegister=function(){
        var userObject = {
            "useremail":$scope.useremail,
            "username":$scope.username,
            "password1":$scope.password1,
            "mobile":0,
            "address":[{"area":"null","city":"null","state":"null","pincode":0,"country":"null"}]
        };
        var promise = regfactory.registerUser(userObject);
        promise.then(function(data){
            console.log("SUCCESS ",data.data.msg);
            $scope.result = data.data.msg;
        },function(error){
            $scope.result = error;
        });
    }
})