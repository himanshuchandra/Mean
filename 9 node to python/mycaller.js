var obj=require("calchim");
console.log(typeof obj);
console.log(obj.addition(10,20));

var PythonShell = require('python-shell');
/*
PythonShell.run('zzzz.py', function (err) {
  if (err) throw err;
  else console.log('finished');
});

*/
var value1=1;
var value2=2;
var value3=3;

var options = {
  mode: 'binary',
  //pythonPath: 'path/to/python',
  pythonOptions: ['-u'],
  scriptPath: 'pythonscripts',
  args: [value1, value2, 'value3']
};

console.log(options.args[0]);

PythonShell.run('add.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});