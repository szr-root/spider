 // function(e, t, n) {
 //            "use strict";
 //            var i = this && this.__awaiter || function(e, t, n, i) {
 //                return new (n || (n = Promise))((function(o, r) {
 //                    function s(e) {
 //                        try {
 //                            c(i.next(e))
 //                        } catch (e) {
 //                            r(e)
 //                        }
 //                    }
 //                    function a(e) {
 //                        try {
 //                            c(i.throw(e))
 //                        } catch (e) {
 //                            r(e)
 //                        }
 //                    }
 //                    function c(e) {
 //                        var t;
 //                        e.done ? o(e.value) : (t = e.value,
 //                        t instanceof n ? t : new n((function(e) {
 //                            e(t)
 //                        }
 //                        ))).then(s, a)
 //                    }
 //                    c((i = i.apply(e, t || [])).next())
 //                }
 //                ))
 //            }
 //              , o = this && this.__importDefault || function(e) {
 //                return e && e.__esModule ? e : {
 //                    default: e
 //                }
 //            }
 //            ;
 //            Object.defineProperty(t, "__esModule", {
 //                value: !0
 //            }),
 //            t.makeDigest = t.encryptWithAES128 = t.RSA = t.initPublicKey = t.AESdecrypt = t.AESencrypt = void 0;
 //            const r = o(n(452))
 //              , s = o(n(5743))
 //              , a = o(n(1148))
 //              , c = o(n(5957))
 //              , l = o(n(8214))
 //              , u = o(n(8269))
 //              , d = n(5285);
 //            function p(e, t) {
 //                const n = s.default.parse(t)
 //                  , i = s.default.parse(e);
 //                return r.default.encrypt(i, n, {
 //                    mode: a.default,
 //                    padding: c.default
 //                }).ciphertext.toString(u.default)
 //            }
 //            t.AESencrypt = p,
 //            t.AESdecrypt = function(e, t) {
 //                const n = s.default.parse(t);
 //                return r.default.decrypt(e, n, {
 //                    mode: a.default,
 //                    padding: c.default
 //                }).toString(s.default)
 //            }
 //            ;
 //            let f = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp/NaqnXzrnkOGi7neRtUKWhMjenaBpHdN0SL0Ro4Pcjhygxkyk4JltLAtqrNPzIBcFL52ecGS4C9VHm+1UrZIdGzDuJwShWSsnQYRQ47v8ixPpDoScGYBVHi0LN1DJg5lGxkWayeXF1C/hUwZ11P26fmE2M5Jec9Z6ClZPQDjxBJdFtegAQLHsV+KEf/VJu+pqpe2SWuY4UrlL4wQH+y5jf89nccFFQ0I9T3vjSEgaOwRzeSGdNvQg0ORI9sefq5W9F0+4iPVbgKdLAvMY/H9oK8TqsSbP1gkGOysUn68Qk/STxTbbO0Y1KMyrRUieGUe0OIx1tJUcstoZP9Uzi+xwIDAQAB";
 //            const h = {
 //                prod: f,
 //                test: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr2W4acbA0gMp2hUHOHzaJx7EHoEIVs0uNYSklUdTdw4n/yvxxuoE3ssf9n1rcNwGNBTbbRBg4jttATR1h9dQeD0ya29tBzBxTUmQ+rGXaF2JUUQP0Hkq2Hs30tMkKCW1u6RoTShMiMOdFZXAMraPqIFLN8xZDYYyq2oI66UAv9onedosKtpSwwKDUq5UVQq5wGvJG5DMRO708lnvR2aIa4LaDOt6gFNmxaDjrsZB4V+EQ5t3MSVhMROs4rO0SO9QBb5/j2SOQ6TNt1/+6+Q85u+npkxuUP0SO+hjepHWJZzcZ/R4UfHuGDUmu9lFx4QHnVvYT5JRVDHkXo4qyXr1NwIDAQAB"
 //            };
 //            t.initPublicKey = e=>{
 //                f = "prod" === e.env || "production" === e.env ? h.prod : h.test
 //            }
 //            ,
 //            t.RSA = e=>i(void 0, void 0, void 0, (function*() {
 //                const t = (e=>{
 //                    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 //                      , n = t.length;
 //                    let i = "";
 //                    for (let e = 0; e < 16; e++)
 //                        i += t.charAt(Math.floor(Math.random() * n));
 //                    return i
 //                }
 //                )();
 //                window.JSEncrypt || (yield(0,
 //                d.loadEncrypt)());
 //                var n = new window.JSEncrypt;
 //                return n.setPublicKey(f),
 //                {
 //                    k: n.encrypt(t),
 //                    d: p(e, t),
 //                    key: t
 //                }
 //            }
 //            )),
 //            t.encryptWithAES128 = (e,t)=>{
 //                if (!window.crypto.subtle)
 //                    return "";
 //                const n = (new TextEncoder).encode(e)
 //                  , i = window.crypto.getRandomValues(new Uint8Array(16))
 //                  , o = {
 //                    name: "AES-CBC",
 //                    iv: i
 //                };
 //                return window.crypto.subtle.importKey("raw", t, {
 //                    name: "AES-CBC",
 //                    length: 128
 //                }, !1, ["encrypt", "decrypt"]).then((e=>window.crypto.subtle.encrypt(o, t, n))).then((e=>{
 //                    const t = new Uint8Array(i.byteLength + e.byteLength);
 //                    return t.set(i, 0),
 //                    t.set(new Uint8Array(e), i.byteLength),
 //                    btoa(String.fromCharCode.apply(null, t))
 //                }
 //                ))
 //            }
 //            ,
 //            t.makeDigest = (e,t,n)=>(0,
 //            l.default)(e + t + n)
 //        },