require("./data1")
require("./data2")

!function (c) {
    function n(n) {
        for (var h, e, f = n[0], d = n[1], b = n[2], t = 0, o = []; t < f.length; t++) e = f[t], Object.prototype.hasOwnProperty.call(k, e) && k[e] && o.push(k[e][0]), k[e] = 0;
        for (h in d) Object.prototype.hasOwnProperty.call(d, h) && (c[h] = d[h]);
        for (r && r(n); o.length;) o.shift()();
        return a.push.apply(a, b || []), u()
    }

    function u() {
        for (var c, n = 0; n < a.length; n++) {
            for (var u = a[n], h = !0, e = 1; e < u.length; e++) {
                var d = u[e];
                0 !== k[d] && (h = !1)
            }
            h && (a.splice(n--, 1), c = f(f.s = u[0]))
        }
        return c
    }

    var h = {}, e = {runtime: 0}, k = {runtime: 0}, a = [];

    function f(n) {
        if (h[n]) return h[n].exports;
        var u = h[n] = {i: n, l: !1, exports: {}};
        console.log("n:::",n)
        return c[n].call(u.exports, u, u.exports, f), u.l = !0, u.exports
    }

    window.loader = f
    f.e = function (c) {
        var n = [];
        e[c] ? n.push(e[c]) : 0 !== e[c] && {
            "chunk-017d": 1,
            "chunk-03a6": 1,
            "chunk-12b1": 1,
            "chunk-1773": 1,
            "chunk-1a15": 1,
            "chunk-237a": 1,
            "chunk-ff9f": 1,
            "chunk-0ba7": 1,
            "chunk-f9ed": 1,
            "chunk-b1fa": 1,
            "chunk-ed00": 1,
            "chunk-2846": 1,
            "chunk-421e": 1,
            "chunk-45a6": 1,
            "chunk-47ee": 1,
            "chunk-f036": 1,
            "chunk-50e5": 1,
            "chunk-5118": 1,
            "chunk-54e5": 1,
            "chunk-4540": 1,
            "chunk-1395": 1,
            "chunk-0387": 1,
            "chunk-18d3": 1,
            "chunk-4e0e": 1,
            "chunk-8f7f": 1,
            "chunk-ee33": 1,
            "chunk-8171": 1,
            "chunk-a84b": 1,
            "chunk-0764": 1,
            "chunk-567e": 1,
            "chunk-5903": 1,
            "chunk-d356": 1,
            "chunk-592d": 1,
            "chunk-62f6": 1,
            "chunk-1e4d": 1,
            "chunk-c326": 1,
            "chunk-6361": 1,
            "chunk-694a": 1,
            "chunk-6b37": 1,
            "chunk-6b48": 1,
            "chunk-767c": 1,
            "chunk-7798": 1,
            "chunk-7ebe": 1,
            "chunk-1985": 1,
            "chunk-ff11": 1,
            "chunk-5477": 1,
            "chunk-bcc3": 1,
            "chunk-3c13": 1,
            "chunk-6be3": 1,
            "chunk-cff0": 1,
            "chunk-commons": 1,
            "chunk-41f6": 1,
            "chunk-ec22": 1,
            "chunk-5481": 1,
            "chunk-0163": 1,
            "chunk-3acb": 1,
            "chunk-4e7f": 1,
            "chunk-cf8c": 1,
            "chunk-14f6": 1,
            "chunk-524e": 1,
            "chunk-6009": 1,
            "chunk-c2bd": 1,
            "chunk-08ac": 1,
            "chunk-0f1a": 1,
            "chunk-13a3": 1,
            "chunk-213f": 1,
            "chunk-56d4": 1,
            "chunk-13d7": 1,
            "chunk-19ab": 1,
            "chunk-1eb1": 1,
            "chunk-217c": 1,
            "chunk-620a": 1,
            "chunk-6479": 1,
            "chunk-27b0": 1,
            "chunk-153d": 1,
            "chunk-7593": 1,
            "chunk-2839": 1,
            "chunk-61c4": 1,
            "chunk-4aa9": 1,
            "chunk-3a66": 1,
            "chunk-3d9d": 1,
            "chunk-579b": 1,
            "chunk-7960": 1,
            "chunk-3dce": 1,
            "chunk-4285": 1,
            "chunk-4314": 1,
            "chunk-3368": 1,
            "chunk-978d": 1,
            "chunk-5c74": 1,
            "chunk-2728": 1,
            "chunk-7ac0": 1,
            "chunk-4b29": 1,
            "chunk-4e87": 1,
            "chunk-c49c": 1,
            "chunk-c32b": 1,
            "chunk-13ee": 1,
            "chunk-4fb8": 1,
            "chunk-5385": 1,
            "chunk-495a": 1,
            "chunk-286e": 1,
            "chunk-6cbb": 1,
            "chunk-29ab": 1,
            "chunk-d07f": 1,
            "chunk-5770": 1,
            "chunk-340d": 1,
            "chunk-5e81": 1,
            "chunk-4697": 1,
            "chunk-6c48": 1,
            "chunk-6f8c": 1,
            "chunk-7128": 1,
            "chunk-7131": 1,
            "chunk-51fd": 1,
            "chunk-aeff": 1,
            "chunk-78cd": 1,
            "chunk-5cfe": 1,
            "chunk-3d16": 1,
            "chunk-a933": 1,
            "chunk-ee46": 1,
            "chunk-247e": 1,
            "chunk-b10a": 1,
            "chunk-4e0d": 1,
            "chunk-c48d": 1,
            "chunk-e3a2": 1,
            "chunk-eaba": 1,
            "chunk-1538": 1,
            "chunk-bd0d": 1,
            "chunk-026d": 1,
            "chunk-fe81": 1,
            "chunk-f1bf": 1,
            "chunk-f91d": 1,
            "chunk-3e7b": 1,
            "chunk-487b": 1,
            "chunk-e097": 1,
            "chunk-7a87": 1,
            "chunk-bfe8": 1,
            "chunk-7a11": 1,
            "chunk-a7f4": 1,
            "chunk-e43e": 1,
            "chunk-496b": 1,
            "chunk-18c4": 1,
            "chunk-f0b0": 1,
            "chunk-025d": 1,
            "chunk-1b91": 1,
            "chunk-2ed0": 1,
            "chunk-6dac": 1,
            "chunk-7c2e": 1
        }[c] && n.push(e[c] = new Promise(function (n, u) {
            for (var h = "static/css/" + ({"chunk-commons": "chunk-commons"}[c] || c) + "." + {
                "chunk-017d": "6fd4f533",
                "chunk-03a6": "1f24526d",
                "chunk-12b1": "4202a017",
                "chunk-1773": "6729146f",
                "chunk-1a15": "94260d1c",
                "chunk-237a": "0849fecb",
                "chunk-238f": "31d6cfe0",
                "chunk-6125": "31d6cfe0",
                "chunk-ff9f": "f6a918f4",
                "chunk-0ba7": "83e0d76c",
                "chunk-f9ed": "59606a6e",
                "chunk-b1fa": "a43572f3",
                "chunk-ed00": "3bf1380f",
                "chunk-2846": "591c4dfb",
                "chunk-421e": "d9aac38c",
                "chunk-45a6": "dd9612d6",
                "chunk-47ee": "ba2bcb5e",
                "chunk-f036": "76cc9133",
                "chunk-50e5": "9262d496",
                "chunk-5118": "94db3f1f",
                "chunk-54e5": "8da854a1",
                "chunk-4540": "0d9f9c71",
                "chunk-1395": "d20db70a",
                "chunk-0387": "f7552aa9",
                "chunk-18d3": "3da4bc14",
                "chunk-4e0e": "633e3427",
                "chunk-8f7f": "2d5d9b08",
                "chunk-ee33": "379ce73b",
                "chunk-8171": "0f104896",
                "chunk-a84b": "7570c705",
                "chunk-0764": "0dd8ea1c",
                "chunk-567e": "0bb90810",
                "chunk-5903": "eb5821d0",
                "chunk-d356": "5508d645",
                "chunk-592d": "93f59c50",
                "chunk-62f6": "284e39f5",
                "chunk-1e4d": "a9bdd351",
                "chunk-c326": "b9fca4b6",
                "chunk-6361": "f97f2312",
                "chunk-694a": "289dc8b5",
                "chunk-6b37": "9c5d673b",
                "chunk-6b48": "3be2d6da",
                "chunk-767c": "0db44e9c",
                "chunk-7798": "2440ce31",
                "chunk-7ebe": "370b7f9b",
                "chunk-80c2": "31d6cfe0",
                "chunk-1985": "b3be5142",
                "chunk-ff11": "a67c54ee",
                "chunk-5477": "fc063cdb",
                "chunk-bcc3": "b4765373",
                "chunk-3c13": "140f464b",
                "chunk-6be3": "8c744f75",
                "chunk-cff0": "e0f24827",
                "chunk-commons": "5335aaee",
                MT78: "31d6cfe0",
                "chunk-41f6": "f1dbb257",
                "chunk-ec22": "cfa91dac",
                "chunk-5481": "34b23b3f",
                "chunk-0163": "16050901",
                "chunk-0641": "31d6cfe0",
                "chunk-3acb": "4e10f78a",
                "chunk-4e7f": "7ad6012a",
                "chunk-cf8c": "3f58078b",
                "chunk-14f6": "2f16d707",
                "chunk-524e": "631ad167",
                "chunk-6009": "5a9bd598",
                "chunk-c2bd": "2696eaa0",
                "chunk-08ac": "94c81d54",
                "chunk-0f1a": "c945f18b",
                "chunk-13a3": "dce75ca4",
                "chunk-213f": "954775c9",
                "chunk-56d4": "7981eedd",
                "chunk-13d7": "8cae0a07",
                "chunk-19ab": "c473e65d",
                "chunk-1eb1": "c561065a",
                "chunk-217c": "730cd77c",
                "chunk-6a48": "31d6cfe0",
                "chunk-620a": "38cdd4a7",
                "chunk-6e7d": "31d6cfe0",
                "chunk-6479": "70f329fb",
                "chunk-27b0": "108caeac",
                "chunk-153d": "8b3f22dc",
                "chunk-7593": "4659dd64",
                "chunk-2839": "551397c0",
                "chunk-61c4": "02d9d12c",
                "chunk-4aa9": "dce4344f",
                "chunk-3a66": "6cb29484",
                "chunk-3d9d": "a34a0dff",
                "chunk-579b": "7c9117a4",
                "chunk-7960": "1ec88fd2",
                "chunk-3dce": "0b6c2efc",
                "chunk-4285": "2b797c17",
                "chunk-4314": "ba587b97",
                "chunk-3368": "aed63ae1",
                "chunk-4447": "31d6cfe0",
                "chunk-978d": "11066abf",
                "chunk-5c74": "c72ba40b",
                "chunk-2728": "bfaf8794",
                "chunk-7ac0": "ebffacf3",
                "chunk-4b29": "7c163829",
                "chunk-4e87": "6f5ec9bf",
                "chunk-c49c": "0dddf62b",
                "chunk-c32b": "fb35929e",
                "chunk-13ee": "6c5cfd45",
                "chunk-4fb8": "acd38c3a",
                "chunk-5385": "fbadb077",
                "chunk-495a": "5436fc6f",
                "chunk-286e": "5d125d23",
                "chunk-6cbb": "abd0b7a5",
                "chunk-29ab": "84b5d079",
                "chunk-d07f": "eae134c1",
                "chunk-5770": "2a1fe275",
                "chunk-340d": "ac154d7c",
                "chunk-5e81": "4f340aa0",
                "chunk-4697": "0ac71fe4",
                "chunk-6c48": "dd673980",
                "chunk-6f8c": "c1c7a392",
                "chunk-7128": "ff83aa69",
                "chunk-7131": "553cd49c",
                "chunk-51fd": "d2a5b99f",
                "chunk-aeff": "608cb096",
                "chunk-78cd": "09968b08",
                "chunk-1682": "31d6cfe0",
                "chunk-6dd4": "31d6cfe0",
                "chunk-5cfe": "349fb1f8",
                "chunk-1d43": "31d6cfe0",
                "chunk-3d16": "b9416701",
                "chunk-a933": "c8e1616f",
                "chunk-6cd1": "31d6cfe0",
                "chunk-ee46": "700ad118",
                "chunk-247e": "da9efa5b",
                "chunk-b10a": "56a6ab8b",
                "chunk-1a6e": "31d6cfe0",
                "chunk-4e0d": "f3bd6cf5",
                "chunk-c48d": "dce37e34",
                "chunk-e3a2": "8bdef7d6",
                "chunk-eaba": "1c6ddb4c",
                "chunk-1538": "63e7ea3a",
                "chunk-bd0d": "5e9f93b0",
                "chunk-026d": "5862349f",
                "chunk-fe81": "70076a29",
                "chunk-f1bf": "e4944a22",
                "chunk-f91d": "ab19ce9b",
                "chunk-3e7b": "380df483",
                "chunk-487b": "789e2062",
                "chunk-e097": "cbbc4e44",
                "chunk-7a87": "f34030c0",
                "chunk-bfe8": "438c45e8",
                "chunk-7a11": "c043a6d5",
                "chunk-a7f4": "f9550440",
                "chunk-e43e": "2e4c7400",
                "chunk-496b": "e1557017",
                "chunk-18c4": "a9bec92e",
                "chunk-f0b0": "6869279b",
                "chunk-025d": "c275da16",
                "chunk-1b91": "586e2291",
                "chunk-2ed0": "ea965eaa",
                "chunk-6dac": "ebc2e06c",
                "chunk-7c2e": "e68e99cc"
            }[c] + ".css", e = f.p + h, k = document.getElementsByTagName("link"), a = 0; a < k.length; a++) {
                var d = (t = k[a]).getAttribute("data-href") || t.getAttribute("href");
                if ("stylesheet" === t.rel && (d === h || d === e)) return n()
            }
            var b = document.getElementsByTagName("style");
            for (a = 0; a < b.length; a++) {
                var t;
                if ((d = (t = b[a]).getAttribute("data-href")) === h || d === e) return n()
            }
            var r = document.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.onload = n, r.onerror = function (n) {
                var h = n && n.target && n.target.src || e,
                    k = new Error("Loading CSS chunk " + c + " failed.\n(" + h + ")");
                k.request = h, u(k)
            }, r.href = e, document.getElementsByTagName("head")[0].appendChild(r)
        }).then(function () {
            e[c] = 0
        }));
        var u = k[c];
        if (0 !== u) if (u) n.push(u[2]); else {
            var h = new Promise(function (n, h) {
                u = k[c] = [n, h]
            });
            n.push(u[2] = h);
            var a, d = document.createElement("script");
            d.charset = "utf-8", d.timeout = 120, f.nc && d.setAttribute("nonce", f.nc), d.src = function (c) {
                return f.p + "static/js/" + ({"chunk-commons": "chunk-commons"}[c] || c) + "." + {
                    "chunk-017d": "0691cff4",
                    "chunk-03a6": "70d3d796",
                    "chunk-12b1": "d59f1d6f",
                    "chunk-1773": "be9d2dde",
                    "chunk-1a15": "65ee84f8",
                    "chunk-237a": "decbeeb5",
                    "chunk-238f": "9d75c0ea",
                    "chunk-6125": "272843d1",
                    "chunk-ff9f": "2f59ede9",
                    "chunk-0ba7": "84e530ca",
                    "chunk-f9ed": "347a828b",
                    "chunk-b1fa": "670cf4eb",
                    "chunk-ed00": "9b7c9d53",
                    "chunk-2846": "a746b8d4",
                    "chunk-421e": "1099a2cd",
                    "chunk-45a6": "87a42ab4",
                    "chunk-47ee": "079b57bb",
                    "chunk-f036": "73d9a29d",
                    "chunk-50e5": "523730fe",
                    "chunk-5118": "2c9a6bd1",
                    "chunk-54e5": "e84432dd",
                    "chunk-4540": "2422ea09",
                    "chunk-1395": "6ebcd8b9",
                    "chunk-0387": "5b710de6",
                    "chunk-18d3": "d68ee5c8",
                    "chunk-4e0e": "07243bdb",
                    "chunk-8f7f": "8e679441",
                    "chunk-ee33": "de01607e",
                    "chunk-8171": "fcf17dfb",
                    "chunk-a84b": "ff7494f8",
                    "chunk-0764": "d641ec8b",
                    "chunk-567e": "bc7982ad",
                    "chunk-5903": "c9483d66",
                    "chunk-d356": "d034f6cf",
                    "chunk-592d": "9debf076",
                    "chunk-62f6": "76cc2d99",
                    "chunk-1e4d": "0045c5d7",
                    "chunk-c326": "42c06ec1",
                    "chunk-6361": "7ec31f2b",
                    "chunk-694a": "fef5c84a",
                    "chunk-6b37": "4e40fa26",
                    "chunk-6b48": "9f0f85bc",
                    "chunk-767c": "7171daed",
                    "chunk-7798": "69555585",
                    "chunk-7ebe": "dba742a2",
                    "chunk-80c2": "49cfaf29",
                    "chunk-1985": "e025aeb8",
                    "chunk-ff11": "60e9e6e7",
                    "chunk-5477": "f20ea599",
                    "chunk-bcc3": "e9bead9e",
                    "chunk-3c13": "1a12a915",
                    "chunk-6be3": "444f7b0a",
                    "chunk-cff0": "34b25284",
                    "chunk-commons": "05c6c673",
                    MT78: "c636f2f7",
                    "chunk-41f6": "8796d423",
                    "chunk-ec22": "e09adea5",
                    "chunk-5481": "50714d6b",
                    "chunk-0163": "f4f5ae05",
                    "chunk-0641": "b0a0f597",
                    "chunk-3acb": "03b1101e",
                    "chunk-4e7f": "2cf02109",
                    "chunk-cf8c": "5b8f49be",
                    "chunk-14f6": "a042e25b",
                    "chunk-524e": "3ae8903b",
                    "chunk-6009": "a6cf47b2",
                    "chunk-c2bd": "44ea02f6",
                    "chunk-08ac": "a0bb233b",
                    "chunk-0f1a": "6d5ad8a1",
                    "chunk-13a3": "5f56ad01",
                    "chunk-213f": "80cf1a85",
                    "chunk-56d4": "e532a7e9",
                    "chunk-13d7": "de269dcb",
                    "chunk-19ab": "762dbab6",
                    "chunk-1eb1": "66f3bfb4",
                    "chunk-217c": "b4d47097",
                    "chunk-6a48": "5482b52e",
                    "chunk-620a": "571740b6",
                    "chunk-6e7d": "0872bb56",
                    "chunk-6479": "a53585ff",
                    "chunk-27b0": "4f368f69",
                    "chunk-153d": "5607cdef",
                    "chunk-7593": "c37e0cb7",
                    "chunk-2839": "2ee6065b",
                    "chunk-61c4": "0bec3e3c",
                    "chunk-4aa9": "e5bf3474",
                    "chunk-3a66": "63673d42",
                    "chunk-3d9d": "e38eab19",
                    "chunk-579b": "fcc54322",
                    "chunk-7960": "62b37779",
                    "chunk-3dce": "0433b485",
                    "chunk-4285": "7c5b3504",
                    "chunk-4314": "8a7525b2",
                    "chunk-3368": "7f567e41",
                    "chunk-4447": "3f04433c",
                    "chunk-978d": "9b7d789a",
                    "chunk-5c74": "ef9d31f0",
                    "chunk-2728": "8a9d6b08",
                    "chunk-7ac0": "cd136b46",
                    "chunk-4b29": "dc610bc7",
                    "chunk-4e87": "bd8f6964",
                    "chunk-c49c": "7cae7393",
                    "chunk-c32b": "fd2723e2",
                    "chunk-13ee": "9e6e25a8",
                    "chunk-4fb8": "66fdbda6",
                    "chunk-5385": "7bab70e2",
                    "chunk-495a": "f4b93c23",
                    "chunk-286e": "3b1ab687",
                    "chunk-6cbb": "15476508",
                    "chunk-29ab": "af28b06b",
                    "chunk-d07f": "cba78aca",
                    "chunk-5770": "a0d303a7",
                    "chunk-340d": "c62620d1",
                    "chunk-5e81": "0eaa7ffe",
                    "chunk-4697": "09e4077a",
                    "chunk-6c48": "3f03f8ac",
                    "chunk-6f8c": "5100bba9",
                    "chunk-7128": "87c3de94",
                    "chunk-7131": "c446a0c9",
                    "chunk-51fd": "b6edb4dd",
                    "chunk-aeff": "a03d8991",
                    "chunk-78cd": "359ff59a",
                    "chunk-1682": "61072f91",
                    "chunk-6dd4": "5e0937b6",
                    "chunk-5cfe": "f4303580",
                    "chunk-1d43": "78933611",
                    "chunk-3d16": "d049c11c",
                    "chunk-a933": "7449924b",
                    "chunk-6cd1": "47e32a5b",
                    "chunk-ee46": "bc410159",
                    "chunk-247e": "d9d74368",
                    "chunk-b10a": "6d5ed097",
                    "chunk-1a6e": "1ac0de45",
                    "chunk-4e0d": "f43c5ae2",
                    "chunk-c48d": "83a269ff",
                    "chunk-e3a2": "c6959350",
                    "chunk-eaba": "cc12a982",
                    "chunk-1538": "54fe5c60",
                    "chunk-bd0d": "cb8a54d1",
                    "chunk-026d": "5cf41fe9",
                    "chunk-fe81": "26c11d90",
                    "chunk-f1bf": "b964451e",
                    "chunk-f91d": "81d6ff4e",
                    "chunk-3e7b": "a6b51349",
                    "chunk-487b": "8d724606",
                    "chunk-e097": "59fffccc",
                    "chunk-7a87": "a30a588f",
                    "chunk-bfe8": "142d3386",
                    "chunk-7a11": "237f88c2",
                    "chunk-a7f4": "54867ef2",
                    "chunk-e43e": "24053b06",
                    "chunk-496b": "edbe556e",
                    "chunk-18c4": "c84d634a",
                    "chunk-f0b0": "3e185ff1",
                    "chunk-025d": "a0f51421",
                    "chunk-1b91": "6c7a127c",
                    "chunk-2ed0": "690da44f",
                    "chunk-6dac": "c8e81ac1",
                    "chunk-7c2e": "c001b5e5"
                }[c] + ".js"
            }(c);
            var b = new Error;
            a = function (n) {
                d.onerror = d.onload = null, clearTimeout(t);
                var u = k[c];
                if (0 !== u) {
                    if (u) {
                        var h = n && ("load" === n.type ? "missing" : n.type), e = n && n.target && n.target.src;
                        b.message = "Loading chunk " + c + " failed.\n(" + h + ": " + e + ")", b.name = "ChunkLoadError", b.type = h, b.request = e, u[1](b)
                    }
                    k[c] = void 0
                }
            };
            var t = setTimeout(function () {
                a({type: "timeout", target: d})
            }, 12e4);
            d.onerror = d.onload = a, document.head.appendChild(d)
        }
        return Promise.all(n)
    }, f.m = c, f.c = h, f.d = function (c, n, u) {
        f.o(c, n) || Object.defineProperty(c, n, {enumerable: !0, get: u})
    }, f.r = function (c) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(c, "__esModule", {value: !0})
    }, f.t = function (c, n) {
        if (1 & n && (c = f(c)), 8 & n) return c;
        if (4 & n && "object" == typeof c && c && c.__esModule) return c;
        var u = Object.create(null);
        if (f.r(u), Object.defineProperty(u, "default", {
            enumerable: !0,
            value: c
        }), 2 & n && "string" != typeof c) for (var h in c) f.d(u, h, function (n) {
            return c[n]
        }.bind(null, h));
        return u
    }, f.n = function (c) {
        var n = c && c.__esModule ? function () {
            return c.default
        } : function () {
            return c
        };
        return f.d(n, "a", n), n
    }, f.o = function (c, n) {
        return Object.prototype.hasOwnProperty.call(c, n)
    }, f.p = "/", f.oe = function (c) {
        throw c
    };
    var d = window.webpackJsonp = window.webpackJsonp || [], b = d.push.bind(d);
    d.push = n, d = d.slice();
    for (var t = 0; t < d.length; t++) n(d[t]);
    var r = b;
    u()
}([]);

console.log(window.loader('MuMZ').a("12345"))