require('./data1')
require('./data2')
require('./data3')

!function(e) {
    function r(r) {
        for (var n, u, f = r[0], i = r[1], c = r[2], d = 0, p = []; d < f.length; d++)
            u = f[d],
            Object.prototype.hasOwnProperty.call(o, u) && o[u] && p.push(o[u][0]),
            o[u] = 0;
        for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (l && l(r); p.length; )
            p.shift()();
        return a.push.apply(a, c || []),
        t()
    }
    function t() {
        for (var e, r = 0; r < a.length; r++) {
            for (var t = a[r], n = !0, f = 1; f < t.length; f++) {
                var i = t[f];
                0 !== o[i] && (n = !1)
            }
            n && (a.splice(r--, 1),
            e = u(u.s = t[0]))
        }
        return e
    }
    var n = {}
      , o = {
        1: 0
    }
      , a = [];
    function u(r) {
        if (n[r])
            return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        }
          , o = !0;
        try {
            console.log("r:::",r)
            e[r].call(t.exports, t, t.exports, u),
            o = !1
        } finally {
            o && delete n[r]
        }
        return t.l = !0,
        t.exports
    }

    window.loader = u
    u.e = function(e) {
        var r = []
          , t = o[e];
        if (0 !== t)
            if (t)
                r.push(t[2]);
            else {
                var n = new Promise((function(r, n) {
                    t = o[e] = [r, n]
                }
                ));
                r.push(t[2] = n);
                var a, f = document.createElement("script");
                f.charset = "utf-8",
                f.timeout = 120,
                u.nc && f.setAttribute("nonce", u.nc),
                f.src = function(e) {
                    return u.p + "static/chunks/" + ({
                        25: "8a9eb68fd9dc91300e39a76232008ad7015f86b6",
                        26: "d6e1aeb5"
                    }[e] || e) + "." + {
                        25: "5fb6424da95f105bbbfe",
                        26: "3aa25519bed7d003a003",
                        67: "d99f6d09316bf2d6d43c",
                        68: "432728b53c3ce71a7fe9",
                        69: "ff5fdc634016d6d26d50",
                        70: "a0660bc4fb5fbbaa81f6",
                        71: "6e98a8f0e8e0756eb5c2"
                    }[e] + ".js"
                }(e);
                var i = new Error;
                a = function(r) {
                    f.onerror = f.onload = null,
                    clearTimeout(c);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                              , a = r && r.target && r.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
                            i.name = "ChunkLoadError",
                            i.type = n,
                            i.request = a,
                            t[1](i)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: f
                    })
                }
                ), 12e4);
                f.onerror = f.onload = a,
                document.head.appendChild(f)
            }
        return Promise.all(r)
    }
    ,
    u.m = e,
    u.c = n,
    u.d = function(e, r, t) {
        u.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }
    ,
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    u.t = function(e, r) {
        if (1 & r && (e = u(e)),
        8 & r)
            return e;
        if (4 & r && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (u.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & r && "string" != typeof e)
            for (var n in e)
                u.d(t, n, function(r) {
                    return e[r]
                }
                .bind(null, n));
        return t
    }
    ,
    u.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return u.d(r, "a", r),
        r
    }
    ,
    u.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    ,
    u.p = "",
    u.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var f = window.webpackJsonp = window.webpackJsonp || []
      , i = f.push.bind(f);
    f.push = r,
    f = f.slice();
    for (var c = 0; c < f.length; c++)
        r(f[c]);
    var l = i;
    t()
}([]);

let r = {os: 'web', sv: '7.7.5', app: 'CailianpressWeb'}

console.log(window.loader("W2Yj")(r))