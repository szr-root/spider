const CryptoJS = require('crypto-js');

function ve(e) {
    var t = "appId=".concat(5053, "&cityCode=").concat('510100', "&t=").concat((new Date).getTime());
    for (var r in e)
        String(e[r]) && void 0 != e[r] && null != e[r] && "undefined" != e[r] && "null" != e[r] && (t = "".concat(t, "&").concat(r, "=").concat(e[r]));
    return {
        params: t,
        sign: CryptoJS.MD5(("".concat(t).concat('750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2'))).toString()
    }
}

console.log(ve({
    "pageIndex": 4,
    "pageSize": 12,
    "keyword": "%E8%8B%B1%E8%AF%AD",
    "order": "0"
}))

