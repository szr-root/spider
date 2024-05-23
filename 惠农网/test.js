`
X-B3-Traceid:0LWHN64LPSWGTJ3M
X-Client-Appid:5
X-Client-Environment:pro
X-Client-Id:b4caa38-8dd2-4cb5-941a-61a265617
X-Client-Nonce:b80bb80ac4545aecc588a09cc5d9fab7
X-Client-Page:/
X-Client-Sid:S_0LWHN64CPGPUP0EZ
X-Client-Sign:037346c2c578ba002d4c6cbe9287b6ed77ce29a38282f42c2e709e3858301cc7f3bbf525b8bde19720dbb5e45ad62310
X-Client-Time:1716371322829
X-Hn-Job:If you see these message, I hope you dont hack us, I hope you can join us! Please visit https://www.cnhnkj.com/job.html
`


var e = (new Date).getTime();
//
// function get_id(t) {
//         // var e = (new Date).getTime();
//         return (t ? "xxxxxxxxxxxxxyxxxxyxxxxxxxxxxxxx" : "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxx").replace(/[xy]/g, (function(t) {
//             var n = (e + 16 * Math.random()) % 16 | 0;
//             return e = Math.floor(e / 16),
//             ("x" == t ? n : 3 & n | 8).toString(16)
//         }
//         ))
//     }


function get_nonce(t) {
        return (t ? "xxxxxxxxxxxxxyxxxxyxxxxxxxxxxxxx" : "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxx").replace(/[xy]/g, (function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" == t ? n : 3 & n | 8).toString(16)
        }
        ))
    }
function get_client_id(t) {
    var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function o(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9, b = t, n = ""; 0 != b;) {
            var o = b % 36
                , c = b / 36;
            n = r.charAt(o) + n,
                b = Math.round(Math.floor(c))
        }
        return ("0000000000000000" + n).substr(-e)
    }
    return o(t)
}



 function randint(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
        }

h = get_client_id(e, 9)
d =get_client_id(randint(0, 78364164095), 7)
v ="S_" + h + d;

X_B3_TRACEID = get_client_id(e, 9) + get_client_id(randint(0, 78364164095), 7)

head = {
    'X-CLIENT-TIME':e,
    'X-CLIENT-NONCE':get_nonce(!0),
    'X-CLIENT-SID':v,
    'X-B3-TRACEID':X_B3_TRACEID,
    'X-CLIENT-ID':get_nonce()
}

console.log(head)