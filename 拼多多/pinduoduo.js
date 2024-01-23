var vm = require('vm2');
var fs = require('fs');
const {VM, VMScript} = vm;

var myvm = new VM();

js_code = "";

js_code += fs.readFileSync("./补环境.js");
js_code += ';\n';


js_code += fs.readFileSync("./源码2.js");

function fn(){
    debugger;
    return myvm.run(js_code)

}

data = fn()
console.log(data)