var dbOperations= {

 addUser:function(data,response){
var User = require("./schemadefine");
User.create(data,function(error,result){
    
     //User.create({"name":"Ram","phone":[2222,3333],"address":[{"state":"Delhi","pincode":2222},{"state":"Delhi","pincode":2222}]},function(error,response){
   if(error){
       response.json({"msg":"Can't Add Error Occured "});
   }
    else{
       response.json({msg:"Register SuccessFully..."});
   }
});
}
,
doLogin:function (loginObject,response){
    
    var User = require("./schemadefine");
    
    User.find({
     "$and":[
        {
            "$or": [{
        "useremail":loginObject.loginid
        }, 
                       {
        "username": loginObject.loginid
        }]
        },
         {
             "password1":loginObject.loginpassword
         }
      ]
    },function(error,result){
    if(error){
       console.log("Error Occured",error);
   }
    else{ 
        
       console.log(result.data);
        response.json({result});
        //response.json({msg:"Logged in SuccessFully..."});
       //loginObject.logintoken=true;
        //return loginObject.logintoken;
   }
});
}
}
module.exports =dbOperations; 
//findUser("Ram");
