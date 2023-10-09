npm install vm2@3.9.3. // 版本较为纯净


########################   vm2的使用： ########################

var vm = require("vm2")

const {VM, VMScript} = vm

var myvm = new VM()

// ret = myvm.run("process")
// console.log(ret)

ret =   myvm.run("1+2")
console.log(ret)

################################################


npm install -g node-inspect

