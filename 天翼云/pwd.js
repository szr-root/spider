const CryptoJS = require('crypto-js');
t = {}
n = '1722334563@163.com000000'
e = '123456'
p = {}
p.a = CryptoJS

D = function (e) {
    var n = e.message
        , t = void 0 === n ? e : n
        , r = e.duration
        , a = void 0 === r ? u["l"] : r;
    return h && h.close(),
        h = i()(t),
        setTimeout((function () {
                h.close()
            }
        ), a),
        h
}
    , C = function (e) {
    e.preventDefault()
}
    , x = function (e) {
    e.target.src = s.a
}
    , P = function (e, n) {
    return e.split(n || "<separator />")
}
    , O = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
    return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
    , S = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
    return e.indexOf("Android") > -1 || e.indexOf("Adr") > -1
}
    , R = function () {
    var e = !1;
    try {
        var n = Object.defineProperty({}, "passive", {
            get: function () {
                return e = !0,
                    e
            }
        });
        window.addEventListener("test", null, n),
            window.removeEventListener("test", null)
    } catch (t) {
        I(t)
    }
    return e
}
    , A = function (e, n) {
    return new Promise((function (t, r) {
            var a = n.type
                , o = void 0 === a ? "image/jpeg" : a
                , c = n.ratio
                , i = void 0 === c ? .7 : c
                , u = n.fidelity
                , d = void 0 === u ? .92 : u
                , s = new Image;
            s.src = e,
                s.onload = function () {
                    var e = document.createElement("canvas")
                        , n = e.getContext("2d");
                    e.width = this.width * i,
                        e.height = this.height * i,
                        n.drawImage(s, 0, 0, e.width, e.height),
                        e.toBlob((function (e) {
                                t(e)
                            }
                        ), o, d)
                }
                ,
                s.onerror = function (e) {
                    r(e)
                }
        }
    ))
}
    , j = function (e) {
    return e.replace(/&#39;/g, "'").replace(/&quot;/g, '"')
}
    , B = function () {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.continueLength, t = void 0 === n ? 3 : n, r = [{
        list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    }, {
        list: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    }, {
        list: ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    }, {
        list: ["z", "x", "c", "v", "b", "n", "m"]
    }].map((function (e) {
            return e.xContinueKeyList = [],
                e.xReverseContinueKeyList = [],
                e.yLeftContinueKeyList = [],
                e.yLeftReverseContinueKeyList = [],
                e.yRightContinueKeyList = [],
                e.yRightReverseContinueKeyList = [],
                e
        }
    )), a = 0; a < r.length; a++)
        for (var c = 0; c < r[a].list.length; c++) {
            var i = r[a].list;
            if (c < i.length - 2) {
                for (var u = "", d = 0; d < t; d++)
                    u += i[c + d];
                r[a].xContinueKeyList.push(u),
                    r[a].xReverseContinueKeyList.push(X(u))
            }
        }
    var s = r.reduce((function (e, n) {
            var t = [];
            return Object.entries(n).forEach((function (e) {
                    var n = Object(o["a"])(e, 2)
                        , r = n[0]
                        , a = n[1];
                    "list" !== r && (t = t.concat(a))
                }
            )),
                e = e.concat(t),
                e
        }
    ), []);
    return s
}
    , L = {
    isChinese: function (e) {
        return /^[\u4e00-\u9fa5]+$/.test(e.toString().trim())
    },
    name: function (e) {
        return /^[\u4E00-\u9FA5A-Za-z]+$/.test(e.toString().trim())
    },
    postNo: function (e) {
        return /^[1-9][0-9]{5}$/.test(e.toString().trim())
    },
    phone: function (e) {
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(e.toString().trim())
    },
    email: function (e) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.toString().trim())
    },
    bankCard: function (e) {
        return /^\d{9,30}$/.test(e.toString().trim())
    },
    subBranchNo: function (e) {
        return 12 === e.toString().trim().length
    },
    idCard: function (e) {
        return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e.toString().trim())
    },
    isBusinessNo: function (e) {
        return /^[0-9A-Za-z]{9,18}$/.test(e.toString().trim())
    },
    isBusinessName: function (e) {
        return /^[^0-9A-Za-z]{2,}$/.test(e.toString().trim())
    },
    isAuthorizerName: function (e) {
        return /^[^0-9]{2,}$/.test(e.toString().trim())
    },
    taxpayerNo: function (e) {
        return /^[A-Za-z0-9]+$/.test(e.toString().trim())
    },
    ip: function (e) {
        return /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/.test(e.toString().trim())
    },
    password: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , t = n.minLength
            , r = void 0 === t ? 8 : t
            , a = n.maxLength
            , o = void 0 === a ? 26 : a
            , c = n.account
            , i = void 0 === c ? "" : c;

        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
                , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
            return function (t) {
                return t.length >= e && t.length <= n
            }
        }

        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return new RegExp("^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![a-z0-9]+$)(?![a-z~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)(?![0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]+$)[a-zA-Z0-9~!@#$%^*_+\\-{\\[\\]}:?,.\\/]{".concat(r, ",").concat(o, "}$")).test(e)
        }

        function s(e) {
            return function (n) {
                return !!e && (e = e.toLowerCase().split("@")[0],
                    n = n.toLowerCase(),
                !n.includes(e) && !n.includes(X(e)))
            }
        }

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return !B().some((function (n) {
                    return e.toLowerCase().includes(n)
                }
            ))
        }

        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                ,
                n = ["Weidong13@", "Pr@ject94", "Pr@ject4", "Pr@ject9", "gzbljc2014!.", "ZX@USS_135246", "nsc&57711135", "tele@HB3*8=2.1", "ZXIPTV_13", "U_tywg_2008", "jiangyanjingwa520.", "1..1administrator", "ZTE@iptv2009", "fshg1433..1", "sf100769978 ..1", "14759179..a", "SqlGdn@InfoxMas2008", "SqlMsde@InfoxEie2000", "Infox1Eies2Sps3Was4!", "Infox4Sms3Sps2Was1!", "zxr10!^**", "ZTE@uss100ZXM10", "cmnet2010@zte", "1qaz@WSX3edc$RFV", "1qaz@WSX", "HPP187 SYS", "P@55w0rd!", "UI-PSWD-01", "UI-PSWD-02", "and 2000 Series", "r@p8p0r+", "tellabs#1", "wrgg15_di524", "P@ssw0rd2017", "P@ssw0rd2018", "R&g3x3vi1", "P@ssw0rd", "P@ssword1", "1qazXSW@", "!QAZ2wsx", "Abc@1396", "P@ssw0rd1", "Pa$$w0rd", "p4$$w0rd", "P@ssw19rd", "Passw0rd!", "P@55w0rd", "p@$$w0rd", "dlghtmxm2017!!", "Password1!", "!QAZ2wsx#EDC", "!QAZ2wsx3edc", "Muklesr0x!221845", "P@55word", "!QAZxsw2", "Server@2017", "zaq1@WSX", "rhsdlek1!", "P@ssw0rds", "@P@ssw0rd", "P@ssw9rd", "P@ssw0rd02", "$easyWinArt4", "M3d!aP0rtal", "Pr!vat3Sh3llAcc3sS", "P@ssw0rd!", "P@ssw0rd1!", "1qaz$RFV", "@P@ssword1", "p@ssword1!", "1qaz2wsx#EDC", "P@55w0rd101", "V4in$ight", "P455w0rd@dm1n", "!QAZ@WSX3edc", "ec2-user", "OvW*busr1", "p@ck3tf3nc3", "qaz_2wsx", "skf_admin1", "!QAZ1qaz", "1qazXSW@", "1qazXSW@", "1qaz2wsx#EDC", "1qaz$RFV", "1qaz@WSX", "1qaz2wsx#EDC"].map((function (e) {
                        return e.toLowerCase()
                    }
                ));
            return !n.includes(e.toLowerCase())
        }

        e = e.toString().trim();
        var f, h = {
            length: {
                pattern: u(r, o),
                tips: "密码长度为8~26个字符"
            },
            combine: {
                pattern: d,
                tips: "密码需为字母（区分大小写）、数字和特殊字符（~!@#$%^*_-+{[]}:,.?/）的组合"
            },
            account: {
                pattern: s(i),
                tips: "密码不能包含与账号相关的信息，不建议包含账号完整字符串、大小写变为或形似变换的字符串"
            },
            dictionary: {
                pattern: p,
                tips: "密码不能使用常用的具有特殊含义的字符串或形似变换的字符串"
            },
            continue: {
                pattern: l,
                tips: "密码不能使用连续3个及以上键位排序字符，如123，Qwe"
            }
        }, m = Object.values(h).every((function (n) {
                var t = n.pattern;
                return !(k(t) && !t(e)) || (f = n.tips,
                    !1)
            }
        ));
        return m || f
    },
    verificationCode: function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , t = n.length
            , r = void 0 === t ? 6 : t;
        return new RegExp("^\\d{".concat(r, "}$")).test(e.toString().trim())
    },
    money: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
            , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
        return !(!e || !n.test(e) || ["0.0", "0.00"].includes(e))
    },
    money2: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
            , n = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
        return !(!e || !n.test(e))
    }
}
    , E = function (e) {
    return {
        backgroundImage: "url(".concat(e || s.a, ")")
    }
}
    , T = function (e) {
    e || (e = {});
    var n = [];
    for (var t in e)
        null !== e[t] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
    return n.length > 0 ? "?" + n.join("&") : ""
}
    , M = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = t.enc
        , a = void 0 === r ? "Utf8" : r
        , o = t.mode
        , c = void 0 === o ? "ECB" : o
        , i = t.padding
        , u = void 0 === i ? "Pkcs7" : i
        // , d = p.a.enc[a].parse('1722334563@163.com000000')
        d = p.a.enc[a].parse(n)
        console.log(d)
        , s = {
        mode: p.a.mode[c],
        padding: p.a.pad[u]
    }
        , l = p.a.TripleDES.encrypt(e, d, s);
        console.log(l.toString())
    return l.toString()
}
    , _ = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
            , r = n.length || 24;
        if (e.length < r)
            for (var a = e.length; a < r; a++)
                e += t;
        else
            e = e.substring(0, r);
        return e
    }
}
    , F = function (e, n) {
    return f["a"].format(e, n)
}
    , H = function () {
    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
        a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
    if (r = r || a.length,
        t)
        for (e = 0; e < t; e++)
            o[e] = a[0 | Math.random() * r];
    else
        for (o[8] = o[13] = o[18] = o[23] = "-",
                 o[14] = "4",
                 e = 0; e < 36; e++)
            o[e] || (n = 0 | 16 * Math.random(),
                o[e] = a[19 === e ? 3 & n | 8 : n]);
    return o.join("")
}
    , q = function () {
    return /MicroMessenger/i.test(window.navigator.userAgent.toLowerCase())
}
    , U = function () {
    return function (e) {
        var n = window.navigator.userAgent;
        return v(e) ? e.test(n) : g(e) ? n.toLowerCase().includes(e.toLowerCase()) : void 0
    }
}
    , N = U()
    , W = function () {
    var e = /[MP]\w+\s+\s+Build\/\w+/;
    return N(e) || N("meitu")
}
    , $ = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return e.replace(/<\/?[a-zA-Z]+\s*\/?>/g, n)
}
    , z = function () {
    var e = window.navigator.userAgent.toLowerCase()
        , n = ["UCBrowser", "Quark"].map((function (e) {
            return e.toLowerCase()
        }
    ))
        , t = n.some((function (n) {
            return e.includes(n)
        }
    ));
    return t
}
    , V = function (e) {
    if ("string" !== typeof e)
        return !1;
    try {
        var n = JSON.parse(e);
        return !("object" !== Object(a["a"])(n) || !n)
    } catch (t) {
        return !1
    }
}
    , G = function (e, n) {
    b(n) && (n = JSON.stringify(n)),
        sessionStorage.setItem(e, n)
}
    , J = function (e) {
    var n = sessionStorage.getItem(e);
    return V(n) ? JSON.parse(n) : n
}
    , Z = function (e) {
    sessionStorage.removeItem(e)
}
    , Q = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.replace(/\s+/g, "")
};

function X() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (g(e))
        return e.split("").reverse().join("");
    throw new Error("input must be string")
}

var K = function (e) {
    if (!e)
        return !1;
    var n = window.open(e);
    null === n && (window.location.href = e)
}
    , Y = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.URL;
    if (window.history && window.history.pushState) {
        if (e === document.URL) {
            var n = Math.floor(10 * Math.random());
            e.includes("?") ? e = e.replace("?", "?t=".concat(n, "&")) : e += "?t=".concat(n)
        }
        window.history.pushState(null, null, e)
    } else
        console.error("浏览器不支持pushState")
}
    , ee = function () {
    window.history.go(-1)
}
    , ne = function () {
    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!g(t))
        throw new Error("input params must be str");
    if (!t)
        return !1;
    var a = t.split("?");
    return n = a[1] ? a[1].split("&") : t.split("&"),
        e = {},
        n.forEach((function (n) {
                var t = n.split("=");
                if (2 === t.length) {
                    var a = t[0]
                        , o = t[1];
                    e[a] ? e[a] = Array.isArray(e[a]) ? [].concat(Object(r["a"])(e[a]), [o]) : [e[a], o] : e[a] = o
                }
            }
        )),
        e
}
    , te = function () {
    var e = document.getElementById("app");
    e && (e.style.overflow = "hidden",
        e.style.position = "fixed")
}
    , re = function () {
    var e = document.getElementById("app");
    e && (e.style.overflow = "",
        e.style.position = "")
}
    , ae = function (e) {
    return window.JSON.parse(window.JSON.stringify(e))
}
    , oe = function (e) {
    var n = e.lastIndexOf(".");
    return e.substring(n + 1)
}
    , ce = function (e, n) {
    return e ? "bankAct" === n ? e.replace(/(.{4})(.*)(.{4})/, (function (e, n, t, r) {
            return n + t.replace(/.{1}/g, "*") + r
        }
    )) : /@/.test(e) || "mail" === n ? e.replace(/(.{1})(.*)(.{1})(@.*)/, "$1****$3$4") : /^\d{7,11}$/.test(e) ? e.replace(/(\d{3})(\d+)(\d{4})/, "$1****$3") : /^\d{12,22}$/.test(e) ? e.replace(/(\d{4})(\d+)(\d{4})/, "$1 **** **** $3") : e.replace(/(\d{2})(\d+)(\d{2})/, "$1**************$3") : ""
}
    , ie = function (e, n, t) {
    if (!(e instanceof Array) || "string" !== typeof n && "object" !== Object(a["a"])(n))
        return -1;
    if ("string" === typeof n) {
        for (var r = 0; r < e.length; r++)
            if (e[r][n] === t)
                return r
    } else if ("object" === Object(a["a"])(n))
        for (var o = function (t) {
            if (Object.keys(n).every((function (r) {
                    return e[t][r] === n[r]
                }
            )))
                return {
                    v: t
                }
        }, c = 0; c < e.length; c++) {
            var i = o(c);
            if ("object" === Object(a["a"])(i))
                return i.v
        }
    return -1
}
    , ue = function (e, n) {
    var t = document.createElement("div");
    t.innerHTML = e;
    var r = t.innerText;
    return n && (r = r.trim().replace(/[\n\r\t]/g, "")),
        r
}
    , de = function (e) {
    var n = {};
    return e.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function (e, t, r) {
            return n[t] = r
        }
    )),
        n
}

//encodeURI(Object(w["c"])(a.value, Object(w["f"])(Object(w["g"])(r.value))))

fn = function (pwd,uname){
    data = encodeURI(Object(M)(pwd, Object(_)(Object(Q)(uname))))
    return data
}
