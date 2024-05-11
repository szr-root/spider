const CryptoJS = require('crypto-js');



Cu = function(e) {
        var t = Ou(e)
          , n = "";
        for (var i in t) {
            var r = ku(e[t[i]]);
            null != r && "" != r.toString() && (n += t[i] + "=" + r + "&")
        }
        return n
    };
ku = function e(t) {
        var n;
        if (Array.isArray(t)) {
            for (var r in n = new Array,
            t) {
                var o = t[r];
                for (var i in o)
                    null == o[i] ? delete t[r][i] : Array.isArray(t[r][i]) && e(t[r][i])
            }
            return n = t,
            JSON.stringify(n).replace(/^(\s|")+|(\s|")+$/g, "")
        }
        return n = t && t.constructor === Object ? JSON.stringify(t) : t
    };
Ou = function(e) {
        var t = new Array
          , n = 0;
        for (var i in e)
            t[n] = i,
            n++;
        return t.sort()
    };
Su = function(e, t, time) {
        var n = t + e + time;
        return n = CryptoJS.MD5(n).toString();

    }

function get_sign(data){
//     param = {
//     "eid": "",
//     "achievementQueryType": "and",
//     "achievementQueryDto": [],
//     "personnelQueryDto": {
//         "queryType": "and"
//     },
//     "aptitudeQueryDto": {
//         "queryType": "and",
//         "nameStr": "",
//         "aptitudeQueryType": "and",
//         "businessScopeQueryType": "or",
//         "filePlaceType": "1",
//         "aptitudeDtoList": [
//             {
//                 "codeStr": "",
//                 "queryType": "and",
//                 "aptitudeType": "qualification"
//             }
//         ],
//         "aptitudeSource": "new"
//     },
//     "page": {
//         "page": 1,
//         "limit": 20,
//         "field": "",
//         "order": ""
//     }
// };
    param = data;
    time = (new Date).getTime();
    t = Cu(param);
    let sign=Su("ghaepVf6IhcHmgnk4NCTXLApxQkBcvh1", Su("mwMlWOdyM7OXbjzQPulT1ndRZIAjShDB", Su("ZuSj0gwgsKXP4fTEz55oAG2q2p1SVGKK", t, time), time), time)
    return [sign,time]
};

var sign = get_sign();
console.log(sign)