var express = require("express");

var app = express();
app.use(express.static('public'));

var bodyParser =require("body-parser");
// npm install body-parser --save
//app.use(express.static("public"));
var session = require('client-sessions');


//app.use(bodyParser());  // Express JS 3.x Support this
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));



app.post('/register',function(request,response){
    var dbOperations = require("./crudoperation");
    var data =request.body;
    console.log("DATA is      ",data);
    dbOperations.addUser(data,response);
    var user;
   // request.session.user = "user";
      if (request.session && request.session.user)
          {
              console.log(request.session.user);
          }
});
app.listen(1234,function(){
   console.log("Server Start...");
});