const CryptoJS = require('crypto-js')

var global = {
    merchant: "changan818",
    version: "1.7.0",
    build: "158",
    env: "sit",
    title: "长安",
    cs: ["https://vm.providesupport.com/1dkmj69jrk1tx1f8kc3v0i39qt"],
    detect: "https://www.caxianlu.com/",
    alipay: "https://www.alipay.com/",
    download: "https://www.caxiazai.com/",
    wallet_list: ["SAFE_BOX", "AG", "BBIN", "KY", "VR", "LL", "HB", "PNG", "AE", "MGS", "BTI", "IBC", "GG"],
    launch_url: ["https://www2.x7zv6d.com", "https://www2.yc25sd.com"],
    prefix: "",
    switch: {
        betting_switch: !0,
        min_order_price: .1,
        order_cheap_switch: !1
    },
    domain_names: [{
        name: "线路1",
        url: "https://www.cavip1.com",
        status: !0,
        target: "https://www.cavip1.com/images/logo.png"
    }, {
        name: "线路2",
        url: "https://www.cavip2.com",
        status: !0,
        target: "https://www.cavip2.com/images/logo.png"
    }, {
        name: "线路3",
        url: "https://www.cavip3.com",
        status: !0,
        target: "https://www.cavip3.com/images/logo.png"
    }, {
        name: "线路4",
        url: "https://www.cavip4.com",
        status: !0,
        target: "https://www.cavip4.com/images/logo.png"
    }, {
        name: "线路5",
        url: "https://www.cavip5.com",
        status: !0,
        target: "https://www.cavip5.com/images/logo.png"
    }]
};
var bitsPerDigit = 16;
var biHalfRadix =32768;
var maxDigitVal = 65535;
var biRadix = 65535;
var biRadixSquared = 4294967296;
var biRadixBits = 16;



setMaxDigits(20);
var dpl10 = 15
  , lr10 = biFromNumber(1e15);
function BigInt(e) {
    this.digits = "boolean" == typeof e && 1 == e ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(e) {
    for (var t, n = "-" == e.charAt(0), a = n ? 1 : 0; a < e.length && "0" == e.charAt(a); )
        ++a;
    if (a == e.length)
        t = new BigInt;
    else {
        var i = (e.length - a) % dpl10;
        for (0 == i && (i = dpl10),
        t = biFromNumber(Number(e.substr(a, i))),
        a += i; a < e.length; )
            t = biAdd(biMultiply(t, lr10), biFromNumber(Number(e.substr(a, dpl10)))),
            a += dpl10;
        t.isNeg = n
    }
    return t
}
function biCopy(e) {
    var t = new BigInt(!0);
    return t.digits = e.digits.slice(0),
    t.isNeg = e.isNeg,
    t
}
function biFromNumber(e) {
    var t = new BigInt;
    t.isNeg = e < 0,
    e = Math.abs(e);
    for (var n = 0; e > 0; )
        t.digits[n++] = e & maxDigitVal,
        e = Math.floor(e / biRadix);
    return t
}
function reverseStr(e) {
    for (var t = "", n = e.length - 1; n > -1; --n)
        t += e.charAt(n);
    return t
}
var hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
function biToString(e, t) {
    var n = new BigInt;
    n.digits[0] = t;
    for (var a = biDivideModulo(e, n), i = hexatrigesimalToChar[a[1].digits[0]]; 1 == biCompare(a[0], bigZero); )
        a = biDivideModulo(a[0], n),
        digit = a[1].digits[0],
        i += hexatrigesimalToChar[a[1].digits[0]];
    return (e.isNeg ? "-" : "") + reverseStr(i)
}
function biToDecimal(e) {
    var t = new BigInt;
    t.digits[0] = 10;
    for (var n = biDivideModulo(e, t), a = String(n[1].digits[0]); 1 == biCompare(n[0], bigZero); )
        n = biDivideModulo(n[0], t),
        a += String(n[1].digits[0]);
    return (e.isNeg ? "-" : "") + reverseStr(a)
}
var hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
function digitToHex(e) {
    var t = "";
    for (i = 0; i < 4; ++i)
        t += hexToChar[15 & e],
        e >>>= 4;
    return reverseStr(t)
}
function biToHex(e) {
    for (var t = "", n = (biHighIndex(e),
    biHighIndex(e)); n > -1; --n)
        t += digitToHex(e.digits[n]);
    return t
}
function charToHex(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? 10 + e - 65 : e >= 97 && e <= 122 ? 10 + e - 97 : 0
}
function hexToDigit(e) {
    for (var t = 0, n = Math.min(e.length, 4), a = 0; a < n; ++a)
        t <<= 4,
        t |= charToHex(e.charCodeAt(a));
    return t
}

function biCopy(e) {
    var t = new BigInt(!0);
    return t.digits = e.digits.slice(0),
    t.isNeg = e.isNeg,
    t
}

function biFromHex(e) {
    for (var t = new BigInt, n = e.length, a = 0; n > 0; n -= 4,
    ++a)
        t.digits[a] = hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
    return t
}
function biFromString(e, t) {
    var n = "-" == e.charAt(0)
      , a = n ? 1 : 0
      , i = new BigInt
      , r = new BigInt;
    r.digits[0] = 1;
    for (var o = e.length - 1; o >= a; o--) {
        i = biAdd(i, biMultiplyDigit(r, charToHex(e.charCodeAt(o)))),
        r = biMultiplyDigit(r, t)
    }
    return i.isNeg = n,
    i
}
function biDump(e) {
    return (e.isNeg ? "-" : "") + e.digits.join(" ")
}
function biAdd(e, t) {
    var n;
    if (e.isNeg != t.isNeg)
        t.isNeg = !t.isNeg,
        n = biSubtract(e, t),
        t.isNeg = !t.isNeg;
    else {
        n = new BigInt;
        for (var a, i = 0, r = 0; r < e.digits.length; ++r)
            a = e.digits[r] + t.digits[r] + i,
            n.digits[r] = a % biRadix,
            i = Number(a >= biRadix);
        n.isNeg = e.isNeg
    }
    return n
}
function biSubtract(e, t) {
    var n;
    if (e.isNeg != t.isNeg)
        t.isNeg = !t.isNeg,
        n = biAdd(e, t),
        t.isNeg = !t.isNeg;
    else {
        var a, i;
        n = new BigInt,
        i = 0;
        for (var r = 0; r < e.digits.length; ++r)
            a = e.digits[r] - t.digits[r] + i,
            n.digits[r] = a % biRadix,
            n.digits[r] < 0 && (n.digits[r] += biRadix),
            i = 0 - Number(a < 0);
        if (-1 == i) {
            i = 0;
            for (r = 0; r < e.digits.length; ++r)
                a = 0 - n.digits[r] + i,
                n.digits[r] = a % biRadix,
                n.digits[r] < 0 && (n.digits[r] += biRadix),
                i = 0 - Number(a < 0);
            n.isNeg = !e.isNeg
        } else
            n.isNeg = e.isNeg
    }
    return n
}
function biHighIndex(e) {
    for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t]; )
        --t;
    return t
}
function biNumBits(e) {
    var t, n = biHighIndex(e), a = e.digits[n], i = (n + 1) * bitsPerDigit;
    for (t = i; t > i - bitsPerDigit && 0 == (32768 & a); --t)
        a <<= 1;
    return t
}
function biMultiply(e, t) {
    for (var n, a, i, r = new BigInt, o = biHighIndex(e), l = biHighIndex(t), s = 0; s <= l; ++s) {
        for (n = 0,
        i = s,
        j = 0; j <= o; ++j,
        ++i)
            a = r.digits[i] + e.digits[j] * t.digits[s] + n,
            r.digits[i] = a & maxDigitVal,
            n = a >>> biRadixBits;
        r.digits[s + o + 1] = n
    }
    return r.isNeg = e.isNeg != t.isNeg,
    r
}
function biMultiplyDigit(e, t) {
    var n, a, i;
    result = new BigInt,
    n = biHighIndex(e),
    a = 0;
    for (var r = 0; r <= n; ++r)
        i = result.digits[r] + e.digits[r] * t + a,
        result.digits[r] = i & maxDigitVal,
        a = i >>> biRadixBits;
    return result.digits[1 + n] = a,
    result
}
function arrayCopy(e, t, n, a, i) {
    for (var r = Math.min(t + i, e.length), o = t, l = a; o < r; ++o,
    ++l)
        n[l] = e[o]
}
var highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535);
function biShiftLeft(e, t) {
    var n = Math.floor(t / bitsPerDigit)
      , a = new BigInt;
    arrayCopy(e.digits, 0, a.digits, n, a.digits.length - n);
    for (var i = t % bitsPerDigit, r = bitsPerDigit - i, o = a.digits.length - 1, l = o - 1; o > 0; --o,
    --l)
        a.digits[o] = a.digits[o] << i & maxDigitVal | (a.digits[l] & highBitMasks[i]) >>> r;
    return a.digits[0] = a.digits[o] << i & maxDigitVal,
    a.isNeg = e.isNeg,
    a
}
var lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
function biShiftRight(e, t) {
    var n = Math.floor(t / bitsPerDigit)
      , a = new BigInt;
    arrayCopy(e.digits, n, a.digits, 0, e.digits.length - n);
    for (var i = t % bitsPerDigit, r = bitsPerDigit - i, o = 0, l = o + 1; o < a.digits.length - 1; ++o,
    ++l)
        a.digits[o] = a.digits[o] >>> i | (a.digits[l] & lowBitMasks[i]) << r;
    return a.digits[a.digits.length - 1] >>>= i,
    a.isNeg = e.isNeg,
    a
}
function biMultiplyByRadixPower(e, t) {
    var n = new BigInt;
    return arrayCopy(e.digits, 0, n.digits, t, n.digits.length - t),
    n
}
function biDivideByRadixPower(e, t) {
    var n = new BigInt;
    return arrayCopy(e.digits, t, n.digits, 0, n.digits.length - t),
    n
}
function biModuloByRadixPower(e, t) {
    var n = new BigInt;
    return arrayCopy(e.digits, 0, n.digits, 0, t),
    n
}
function biCompare(e, t) {
    if (e.isNeg != t.isNeg)
        return 1 - 2 * Number(e.isNeg);
    for (var n = e.digits.length - 1; n >= 0; --n)
        if (e.digits[n] != t.digits[n])
            return e.isNeg ? 1 - 2 * Number(e.digits[n] > t.digits[n]) : 1 - 2 * Number(e.digits[n] < t.digits[n]);
    return 0
}
function biDivideModulo(e, t) {
    var n, a, i = biNumBits(e), r = biNumBits(t), o = t.isNeg;
    if (i < r)
        return e.isNeg ? ((n = biCopy(bigOne)).isNeg = !t.isNeg,
        e.isNeg = !1,
        t.isNeg = !1,
        a = biSubtract(t, e),
        e.isNeg = !0,
        t.isNeg = o) : (n = new BigInt,
        a = biCopy(e)),
        new Array(n,a);
    n = new BigInt,
    a = e;
    for (var l = Math.ceil(r / bitsPerDigit) - 1, s = 0; t.digits[l] < biHalfRadix; )
        t = biShiftLeft(t, 1),
        ++s,
        ++r,
        l = Math.ceil(r / bitsPerDigit) - 1;
    a = biShiftLeft(a, s),
    i += s;
    for (var d = Math.ceil(i / bitsPerDigit) - 1, u = biMultiplyByRadixPower(t, d - l); -1 != biCompare(a, u); )
        ++n.digits[d - l],
        a = biSubtract(a, u);
    for (var c = d; c > l; --c) {
        var m = c >= a.digits.length ? 0 : a.digits[c]
          , p = c - 1 >= a.digits.length ? 0 : a.digits[c - 1]
          , f = c - 2 >= a.digits.length ? 0 : a.digits[c - 2]
          , h = l >= t.digits.length ? 0 : t.digits[l]
          , _ = l - 1 >= t.digits.length ? 0 : t.digits[l - 1];
        n.digits[c - l - 1] = m == h ? maxDigitVal : Math.floor((m * biRadix + p) / h);
        for (var g = n.digits[c - l - 1] * (h * biRadix + _), b = m * biRadixSquared + (p * biRadix + f); g > b; )
            --n.digits[c - l - 1],
            g = n.digits[c - l - 1] * (h * biRadix | _),
            b = m * biRadix * biRadix + (p * biRadix + f);
        (a = biSubtract(a, biMultiplyDigit(u = biMultiplyByRadixPower(t, c - l - 1), n.digits[c - l - 1]))).isNeg && (a = biAdd(a, u),
        --n.digits[c - l - 1])
    }
    return a = biShiftRight(a, s),
    n.isNeg = e.isNeg != o,
    e.isNeg && (n = o ? biAdd(n, bigOne) : biSubtract(n, bigOne),
    a = biSubtract(t = biShiftRight(t, s), a)),
    0 == a.digits[0] && 0 == biHighIndex(a) && (a.isNeg = !1),
    new Array(n,a)
}
function biDivide(e, t) {
    return biDivideModulo(e, t)[0]
}
function biModulo(e, t) {
    return biDivideModulo(e, t)[1]
}
function biMultiplyMod(e, t, n) {
    return biModulo(biMultiply(e, t), n)
}
function biPow(e, t) {
    for (var n = bigOne, a = e; 0 != (1 & t) && (n = biMultiply(n, a)),
    0 != (t >>= 1); )
        a = biMultiply(a, a);
    return n
}
function biPowMod(e, t, n) {
    for (var a = bigOne, i = e, r = t; 0 != (1 & r.digits[0]) && (a = biMultiplyMod(a, i, n)),
    0 != (r = biShiftRight(r, 1)).digits[0] || 0 != biHighIndex(r); )
        i = biMultiplyMod(i, i, n);
    return a
}
function BarrettMu(e) {
    this.modulus = biCopy(e),
    this.k = biHighIndex(this.modulus) + 1;
    var t = new BigInt;
    t.digits[2 * this.k] = 1,
    this.mu = biDivide(t, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(e) {
    var t = biDivideByRadixPower(e, this.k - 1)
      , n = biDivideByRadixPower(biMultiply(t, this.mu), this.k + 1)
      , a = biSubtract(biModuloByRadixPower(e, this.k + 1), biModuloByRadixPower(biMultiply(n, this.modulus), this.k + 1));
    a.isNeg && (a = biAdd(a, this.bkplus1));
    for (var i = biCompare(a, this.modulus) >= 0; i; )
        i = biCompare(a = biSubtract(a, this.modulus), this.modulus) >= 0;
    return a
}
function BarrettMu_multiplyMod(e, t) {
    var n = biMultiply(e, t);
    return this.modulo(n)
}
function BarrettMu_powMod(e, t) {
    var n = new BigInt;
    n.digits[0] = 1;
    for (var a = e, i = t; 0 != (1 & i.digits[0]) && (n = this.multiplyMod(n, a)),
    0 != (i = biShiftRight(i, 1)).digits[0] || 0 != biHighIndex(i); )
        a = this.multiplyMod(a, a);
    return n
}

function biHighIndex(e) {
    for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t]; )
        --t;
    return t
}

function charToHex(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? 10 + e - 65 : e >= 97 && e <= 122 ? 10 + e - 97 : 0
}
function hexToDigit(e) {
    for (var t = 0, n = Math.min(e.length, 4), a = 0; a < n; ++a)
        t <<= 4,
        t |= charToHex(e.charCodeAt(a));
    return t
}

function biFromHex(e) {
    for (var t = new BigInt, n = e.length, a = 0; n > 0; n -= 4,
    ++a)
        t.digits[a] = hexToDigit(e.substr(Math.max(n - 4, 0), Math.min(n, 4)));
    return t
}

function RSAKeyPair(e, t, n) {
    this.e = biFromHex(e),
    this.d = biFromHex(t),
    this.m = biFromHex(n),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}


function BigInt(e) {
    this.digits = "boolean" == typeof e && 1 == e ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}


function encryptedString(e, t) {
    for (var n = new Array, a = t.length, i = 0; i < a; )
        n[i] = t.charCodeAt(i),
        i++;
    for (; n.length % e.chunkSize != 0; )
        n[i++] = 0;
    var r, o, l, s = n.length, d = "";
    for (i = 0; i < s; i += e.chunkSize) {
        for (l = new BigInt,
        r = 0,
        o = i; o < i + e.chunkSize; ++r)
            l.digits[r] = n[o++],
            l.digits[r] += n[o++] << 8;
        var u = e.barrett.powMod(l, e.e);
        d += (16 == e.radix ? biToHex(u) : biToString(u, e.radix)) + " "
    }
    return d.substring(0, d.length - 1)
}

function setMaxDigits(e) {
    ZERO_ARRAY = new Array(maxDigits = e);
    for (var t = 0; t < ZERO_ARRAY.length; t++)
        ZERO_ARRAY[t] = 0;
    bigZero = new BigInt,
    (bigOne = new BigInt).digits[0] = 1
}

function RSAEncrypt(e) {
    var t = 'd53335ea0ca9c820a148f04e076d77244201f016f49f586003b162233d63e729271c2c0dbdf853b8261c4b5af7e080d3ace96edf65506cc58753a1aa1a19b731f90d974903edf6df59edaafb4374b4e257c89df340b6ef31cf23d65c237391fb4e2980f55ac8b199b94b4f32256d236ff7845a3c49d0166107cf92ec863d0d4d'
    return (setMaxDigits(130),
    encryptedString(new RSAKeyPair("10001","",t), e))
}

function rndstring() {
        for (var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", t = "", n = 0; n < 16; n++) {
            var a = Math.floor(Math.random() * e.length);
            t += e.substring(a, a + 1)
        }
        return t
    }


// console.log(i)
var i = rndstring();

function get_Encryption() {
    res = RSAEncrypt(i.split("").reverse().join(""))
    return res
}


function get_parms(e, t) {

        var n = CryptoJS.enc.Utf8.parse(t);
        return CryptoJS.DES.encrypt(e, n, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString()
    }
var e = '{"username":"s18875624532","password":"123456","captcha":"7"}'
var t = i
var pas = get_parms(e,t)

console.log(pas)
console.log(get_Encryption())
// console.log(res.length)