var vm = require('vm2');
var fs = require('fs');
const {VM, VMScript} = vm;

var myvm = new VM();

js_code = "";
js_code += fs.readFileSync("./补.js");
// js_code += ';\n document.cookie=__g=-; wd_guid=7b1b429f-7141-404d-8d91-5d37d76fec5f; historyState=state; _bl_uid=hhl1htmXus54I3h5Uod1y9OljnFh; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1710592267,1710595663; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1710595663; __fid=c1dadf375dca3d0cb9a22a3494b9732b;  __c=1710595663; __l=l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3DJava%26city%3D101010100%26page%3D2&r=&g=&s=3&friend_source=0&s=3&friend_source=0; __a=62036474.1710595663..1710595663.8.1.8.8';

js_code += fs.readFileSync("./boss.js");

function fn(data_list){
    // js_code += ';\n var data = szr.apply(null, [3901,\'0N5OYksjWOYhl1yBNlyYv6R/uVjoftMHv+HVwXb2zxzdPow7oDTgApQvubVaRKXhTyd8AhJv869BpeO3xNZ7ug==\',1710595692058]);\n console.log(data)'
    js_code += `;\n var data = szr.apply(null, '${data_list}');\n console.log(data)`
    return myvm.run(js_code)
}


// szr.apply(null, [3901,'0N5OYksjWOYhl1yBNlyYv6R/uVjoftMHv+HVwXb2zxzm+Xjz2TYF16gehn57ALhrTyd8AhJv869BpeO3xNZ7ug==',1710595692058]);
data_list = [3901,'0N5OYksjWOYhl1yBNlyYv6R/uVjoftMHv+HVwXb2zxzm+Xjz2TYF16gehn57ALhrTyd8AhJv869BpeO3xNZ7ug==',1710595692058];

console.log(fn(data_list))

