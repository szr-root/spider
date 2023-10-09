const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};

const CryptoJS = require('crypto-js')

const {JSEncrypt} = require('jsencrypt');
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad;
    }
    return ret;
}

JSEncrypt.prototype.encryptUnicodeLong = function (string) {
    var k = this.getKey();
    //根据key所能编码的最大长度来定分段长度。key size - 11：11字节随机padding使每次加密结果都不同。
    var maxLength = ((k.n.bitLength() + 7) >> 3) - 11;
    var subStr = "", encryptedString = "";
    var subStart = 0, subEnd = 0;
    var bitLen = 0, tmpPoint = 0;
    for (var i = 0, len = string.length; i < len; i++) {
        //js 是使用 Unicode 编码的，每个字符所占用的字节数不同
        var charCode = string.charCodeAt(i);
        if (charCode <= 0x007f) {
            bitLen += 1;
        } else if (charCode <= 0x07ff) {
            bitLen += 2;
        } else if (charCode <= 0xffff) {
            bitLen += 3;
        } else {
            bitLen += 4;
        }
        //字节数到达上限，获取子字符串加密并追加到总字符串后。更新下一个字符串起始位置及字节计算。
        if (bitLen > maxLength) {
            subStr = string.substring(subStart, subEnd)
            encryptedString += k.encrypt(subStr);
            subStart = subEnd;
            bitLen = bitLen - tmpPoint;
        } else {
            subEnd = i;
            tmpPoint = bitLen;
        }
    }
    subStr = string.substring(subStart, len)
    encryptedString += k.encrypt(subStr);
    return hex2b64(encryptedString);
};

function getUuid() {
    var s = [];
    var a = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = a.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = "4";
    s[19] = a.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23];
    var b = s.join("");
    return b
};

function sort_ASCII(a) {
    var b = new Array();
    var c = 0;
    for (var i in a) {
        b[c] = i;
        c++
    }
    var d = b.sort();
    var e = {};
    for (var i in d) {
        e[d[i]] = a[d[i]]
    }
    return e
};

function url2json(a) {
    var b = /^[^\?]+\?([\w\W]+)$/
        , reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g
        , arr_url = b.exec(a)
        , ret = {};
    if (arr_url && arr_url[1]) {
        var c = arr_url[1], result;
        while ((result = reg_para.exec(c)) != null) {
            ret[result[1]] = result[2]
        }
    }
    return ret
}

const serialize = function (a) {
    var b = [];
    for (var p in a)
        if (a.hasOwnProperty(p) && a[p]) {
            b.push(encodeURIComponent(p) + '=' + encodeURIComponent(a[p]))
        }
    return b.join('&')
};

function dataTojson(s_str) {
    var b = [];
    var c = {};
    b = s_str.split('&');
    for (var i = 0; i < b.length; i++) {
        if (b[i].indexOf('=') != -1) {
            var d = b[i].split('=');
            if (d.length == 2) {
                c[d[0]] = d[1]
            } else {
                c[d[0]] = ""
            }
        } else {
            c[b[i]] = ''
        }
    }
    return c
};

var MD5 = function (r) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var e = t[o] = {i: o, l: !1, exports: {}};
        return r[o].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }

    var t = {};
    return n.m = r, n.c = t, n.i = function (r) {
        return r
    }, n.d = function (r, t, o) {
        n.o(r, t) || Object.defineProperty(r, t, {configurable: !1, enumerable: !0, get: o})
    }, n.n = function (r) {
        var t = r && r.__esModule ? function () {
            return r.default
        } : function () {
            return r
        };
        return n.d(t, "a", t), t
    }, n.o = function (r, n) {
        return Object.prototype.hasOwnProperty.call(r, n)
    }, n.p = "", n(n.s = 4)
}([function (r, n) {
    var t = {
        utf8: {
            stringToBytes: function (r) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(r)))
            }, bytesToString: function (r) {
                return decodeURIComponent(escape(t.bin.bytesToString(r)))
            }
        }, bin: {
            stringToBytes: function (r) {
                for (var n = [], t = 0; t < r.length; t++) n.push(255 & r.charCodeAt(t));
                return n
            }, bytesToString: function (r) {
                for (var n = [], t = 0; t < r.length; t++) n.push(String.fromCharCode(r[t]));
                return n.join("")
            }
        }
    };
    r.exports = t
}, function (r, n, t) {
    !function () {
        var n = t(2), o = t(0).utf8, e = t(3), u = t(0).bin, i = function (r, t) {
            r.constructor == String ? r = t && "binary" === t.encoding ? u.stringToBytes(r) : o.stringToBytes(r) : e(r) ? r = Array.prototype.slice.call(r, 0) : Array.isArray(r) || (r = r.toString());
            for (var f = n.bytesToWords(r), s = 8 * r.length, c = 1732584193, a = -271733879, l = -1732584194, g = 271733878, h = 0; h < f.length; h++) f[h] = 16711935 & (f[h] << 8 | f[h] >>> 24) | 4278255360 & (f[h] << 24 | f[h] >>> 8);
            f[s >>> 5] |= 128 << s % 32, f[14 + (s + 64 >>> 9 << 4)] = s;
            for (var p = i._ff, y = i._gg, v = i._hh, d = i._ii, h = 0; h < f.length; h += 16) {
                var b = c, T = a, x = l, B = g;
                c = p(c, a, l, g, f[h + 0], 7, -680876936), g = p(g, c, a, l, f[h + 1], 12, -389564586), l = p(l, g, c, a, f[h + 2], 17, 606105819), a = p(a, l, g, c, f[h + 3], 22, -1044525330), c = p(c, a, l, g, f[h + 4], 7, -176418897), g = p(g, c, a, l, f[h + 5], 12, 1200080426), l = p(l, g, c, a, f[h + 6], 17, -1473231341), a = p(a, l, g, c, f[h + 7], 22, -45705983), c = p(c, a, l, g, f[h + 8], 7, 1770035416), g = p(g, c, a, l, f[h + 9], 12, -1958414417), l = p(l, g, c, a, f[h + 10], 17, -42063), a = p(a, l, g, c, f[h + 11], 22, -1990404162), c = p(c, a, l, g, f[h + 12], 7, 1804603682), g = p(g, c, a, l, f[h + 13], 12, -40341101), l = p(l, g, c, a, f[h + 14], 17, -1502002290), a = p(a, l, g, c, f[h + 15], 22, 1236535329), c = y(c, a, l, g, f[h + 1], 5, -165796510), g = y(g, c, a, l, f[h + 6], 9, -1069501632), l = y(l, g, c, a, f[h + 11], 14, 643717713), a = y(a, l, g, c, f[h + 0], 20, -373897302), c = y(c, a, l, g, f[h + 5], 5, -701558691), g = y(g, c, a, l, f[h + 10], 9, 38016083), l = y(l, g, c, a, f[h + 15], 14, -660478335), a = y(a, l, g, c, f[h + 4], 20, -405537848), c = y(c, a, l, g, f[h + 9], 5, 568446438), g = y(g, c, a, l, f[h + 14], 9, -1019803690), l = y(l, g, c, a, f[h + 3], 14, -187363961), a = y(a, l, g, c, f[h + 8], 20, 1163531501), c = y(c, a, l, g, f[h + 13], 5, -1444681467), g = y(g, c, a, l, f[h + 2], 9, -51403784), l = y(l, g, c, a, f[h + 7], 14, 1735328473), a = y(a, l, g, c, f[h + 12], 20, -1926607734), c = v(c, a, l, g, f[h + 5], 4, -378558), g = v(g, c, a, l, f[h + 8], 11, -2022574463), l = v(l, g, c, a, f[h + 11], 16, 1839030562), a = v(a, l, g, c, f[h + 14], 23, -35309556), c = v(c, a, l, g, f[h + 1], 4, -1530992060), g = v(g, c, a, l, f[h + 4], 11, 1272893353), l = v(l, g, c, a, f[h + 7], 16, -155497632), a = v(a, l, g, c, f[h + 10], 23, -1094730640), c = v(c, a, l, g, f[h + 13], 4, 681279174), g = v(g, c, a, l, f[h + 0], 11, -358537222), l = v(l, g, c, a, f[h + 3], 16, -722521979), a = v(a, l, g, c, f[h + 6], 23, 76029189), c = v(c, a, l, g, f[h + 9], 4, -640364487), g = v(g, c, a, l, f[h + 12], 11, -421815835), l = v(l, g, c, a, f[h + 15], 16, 530742520), a = v(a, l, g, c, f[h + 2], 23, -995338651), c = d(c, a, l, g, f[h + 0], 6, -198630844), g = d(g, c, a, l, f[h + 7], 10, 1126891415), l = d(l, g, c, a, f[h + 14], 15, -1416354905), a = d(a, l, g, c, f[h + 5], 21, -57434055), c = d(c, a, l, g, f[h + 12], 6, 1700485571), g = d(g, c, a, l, f[h + 3], 10, -1894986606), l = d(l, g, c, a, f[h + 10], 15, -1051523), a = d(a, l, g, c, f[h + 1], 21, -2054922799), c = d(c, a, l, g, f[h + 8], 6, 1873313359), g = d(g, c, a, l, f[h + 15], 10, -30611744), l = d(l, g, c, a, f[h + 6], 15, -1560198380), a = d(a, l, g, c, f[h + 13], 21, 1309151649), c = d(c, a, l, g, f[h + 4], 6, -145523070), g = d(g, c, a, l, f[h + 11], 10, -1120210379), l = d(l, g, c, a, f[h + 2], 15, 718787259), a = d(a, l, g, c, f[h + 9], 21, -343485551), c = c + b >>> 0, a = a + T >>> 0, l = l + x >>> 0, g = g + B >>> 0
            }
            return n.endian([c, a, l, g])
        };
        i._ff = function (r, n, t, o, e, u, i) {
            var f = r + (n & t | ~n & o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n
        }, i._gg = function (r, n, t, o, e, u, i) {
            var f = r + (n & o | t & ~o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n
        }, i._hh = function (r, n, t, o, e, u, i) {
            var f = r + (n ^ t ^ o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n
        }, i._ii = function (r, n, t, o, e, u, i) {
            var f = r + (t ^ (n | ~o)) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n
        }, i._blocksize = 16, i._digestsize = 16, r.exports = function (r, t) {
            if (void 0 === r || null === r) throw new Error("Illegal argument " + r);
            var o = n.wordsToBytes(i(r, t));
            return t && t.asBytes ? o : t && t.asString ? u.bytesToString(o) : n.bytesToHex(o)
        }
    }()
}, function (r, n) {
    !function () {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
            rotl: function (r, n) {
                return r << n | r >>> 32 - n
            }, rotr: function (r, n) {
                return r << 32 - n | r >>> n
            }, endian: function (r) {
                if (r.constructor == Number) return 16711935 & t.rotl(r, 8) | 4278255360 & t.rotl(r, 24);
                for (var n = 0; n < r.length; n++) r[n] = t.endian(r[n]);
                return r
            }, randomBytes: function (r) {
                for (var n = []; r > 0; r--) n.push(Math.floor(256 * Math.random()));
                return n
            }, bytesToWords: function (r) {
                for (var n = [], t = 0, o = 0; t < r.length; t++, o += 8) n[o >>> 5] |= r[t] << 24 - o % 32;
                return n
            }, wordsToBytes: function (r) {
                for (var n = [], t = 0; t < 32 * r.length; t += 8) n.push(r[t >>> 5] >>> 24 - t % 32 & 255);
                return n
            }, bytesToHex: function (r) {
                for (var n = [], t = 0; t < r.length; t++) n.push((r[t] >>> 4).toString(16)), n.push((15 & r[t]).toString(16));
                return n.join("")
            }, hexToBytes: function (r) {
                for (var n = [], t = 0; t < r.length; t += 2) n.push(parseInt(r.substr(t, 2), 16));
                return n
            }, bytesToBase64: function (r) {
                for (var t = [], o = 0; o < r.length; o += 3) for (var e = r[o] << 16 | r[o + 1] << 8 | r[o + 2], u = 0; u < 4; u++) 8 * o + 6 * u <= 8 * r.length ? t.push(n.charAt(e >>> 6 * (3 - u) & 63)) : t.push("=");
                return t.join("")
            }, base64ToBytes: function (r) {
                r = r.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], o = 0, e = 0; o < r.length; e = ++o % 4) 0 != e && t.push((n.indexOf(r.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | n.indexOf(r.charAt(o)) >>> 6 - 2 * e);
                return t
            }
        };
        r.exports = t
    }()
}, function (r, n) {
    function t(r) {
        return !!r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r)
    }

    function o(r) {
        return "function" == typeof r.readFloatLE && "function" == typeof r.slice && t(r.slice(0, 0))
    }

    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    r.exports = function (r) {
        return null != r && (t(r) || o(r) || !!r._isBuffer)
    }
}, function (r, n, t) {
    r.exports = t(1)
}]);

function get_header(s) {
    var c = Date.parse(new Date());
    var d = getUuid();
    // var e = JSON.stringify(sort_ASCII(s))
    var e = s;
    s = encrypt.encryptUnicodeLong(e);

    var sign = MD5(e + d + c);
    return [c, d, e, s, sign]
};
// function get_header(s) {
//     var c = '1696147204000';
//     var d = '4290a8018b187844688b5c186978064e';
//     // var e = JSON.stringify(sort_ASCII(s))
//     var e = s;
//     s = encrypt.encryptUnicodeLong(e);
//
//     var sign = MD5(e + d + c);
//     return [c,d,e,s,sign]
// };


var paramPublicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvxXa98E1uWXnBzXkS2yHUfnBM6n3PCwLdfIox03T91joBvjtoDqiQ5x3tTOfpHs3LtiqMMEafls6b0YWtgB1dse1W5m+FpeusVkCOkQxB4SZDH6tuerIknnmB/Hsq5wgEkIvO5Pff9biig6AyoAkdWpSek/1/B7zYIepYY0lxKQIDAQAB";
var encrypt = new JSEncrypt();
encrypt.setPublicKey(paramPublicKey);

var res = get_header('{"limit":"20","page":"2"}');
console.log(res)

var f = function () {
    this.url = 'www.birdreport.cn';
    this.key = '3583ec0257e2f4c8195eec7410ff1619';
    this.iv = 'd93c0d5ec6352f20'
};
f.prototype.aes_encode = function (a) {
    if (e.location.href.indexOf(this.url) != -1) {
        var b = CryptoJS.enc.Utf8.parse(this.key);
        var c = CryptoJS.enc.Utf8.parse(this.iv);
        var a = CryptoJS.AES.encrypt(a, b, {
            iv: c,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return a
    } else {
        return ''
    }
}
;
f.prototype.aes_decode = function (a) {
    if (e.location.href.indexOf(this.url) != -1) {
        var b = CryptoJS.enc.Utf8.parse(this.key);
        var c = CryptoJS.enc.Utf8.parse(this.iv);
        var d = CryptoJS.AES.decrypt(a, b, {
            iv: c,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return d.toString(CryptoJS.enc.Utf8)
    } else {
        return ''
    }
}
;
f.prototype.decode = function (a) {
    var b = CryptoJS.enc.Utf8.parse(this.key);
    var c = CryptoJS.enc.Utf8.parse(this.iv);
    var d = CryptoJS.AES.decrypt(a, b, {
        iv: c,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return d.toString(CryptoJS.enc.Utf8)
}
;


BIRDREPORT_APIJS = new f()
// decode_str = BIRDREPORT_APIJS.decode(res.data);
s = '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'
var dc = BIRDREPORT_APIJS.decode(s)
console.log(dc)


// e.BIRDREPORT_APIJS = new f()
