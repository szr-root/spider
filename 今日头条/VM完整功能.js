var vm = require('vm2');
var fs = require('fs');
const {VM, VMScript} = vm;

var myvm = new VM();

js_code = "";

js_code += fs.readFileSync("./补环境.js");
js_code += ';\n';


js_code += fs.readFileSync("./源码.js");

js_code += "document.cookie = '\\'msToken=AtjuXlkrU6M_ZqyYRRGIjVBGGAXi8pOiqLjxLOSEGv-a_JPEKBQUm0pdnXN4-U9eLW4bfVrwLg-nZTcMMaz6WFD4H585clPXR8GUjXU=; __ac_signature=_02B4Z6wo00f01AdlIIwAAIDBQFzLvUhdabQHRSQAAGUB17; ttcid=3eaf573d2d7842a8ba5b2ef1f8b61c8235; local_city_cache=%E6%88%90%E9%83%BD; csrftoken=52a6cfab4782456860e263aedaf2eed6; _ga=GA1.1.59252865.1696750805; s_v_web_id=verify_lnh5mbxr_iJGFbDtg_cvvz_4bNV_9Psb_JSqS0F2uWCCt; tt_scid=U6BKdsrcT9Gu04hSRYxr2xE-XEAbvQ0DfKWiTXBiY7NanGbdcIJLID9mRFtMRh3h80a0; _ga_QEHZPBE5HH=GS1.1.1696819192.3.1.1696819208.0.0.0\\''\n"
// console.log(js_code)

function fn(url){
    js_code += `;\no = {url: '${url}'};window.byted_acrawler.sign(o)`
    debugger;
    return myvm.run(js_code)

}

data = fn('123')
console.log(data)