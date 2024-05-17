window = global;

function U(t) { var e, i = 1; return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i }

O = function() {
            function b(t, e, i) { null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e)) }
            return b.prototype.toString = function(t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var e;
                if (16 == t) e = 4;
                else if (8 == t) e = 3;
                else if (2 == t) e = 1;
                else if (32 == t) e = 5;
                else {
                    if (4 != t) return this.toRadix(t);
                    e = 2
                }
                var i, r = (1 << e) - 1,
                    n = !1,
                    s = "",
                    o = this.t,
                    h = this.DB - o * this.DB % e;
                if (0 < o--)
                    for (h < this.DB && 0 < (i = this[o] >> h) && (n = !0, s = a(i)); 0 <= o;) h < e ? (i = (this[o] & (1 << h) - 1) << e - h, i |= this[--o] >> (h += this.DB - e)) : (i = this[o] >> (h -= e) & r, h <= 0 && (h += this.DB, --o)), 0 < i && (n = !0), n && (s += a(i));
                return n ? s : "0"
            }, b.prototype.negate = function() { var t = M(); return b.ZERO.subTo(this, t), t }, b.prototype.abs = function() { return this.s < 0 ? this.negate() : this }, b.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var i = this.t;
                if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                for (; 0 <= --i;)
                    if (0 != (e = this[i] - t[i])) return e;
                return 0
            }, b.prototype.bitLength = function() { return this.t <= 0 ? 0 : this.DB * (this.t - 1) + U(this[this.t - 1] ^ this.s & this.DM) }, b.prototype.mod = function(t) { var e = M(); return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(b.ZERO) && t.subTo(e, e), e }, b.prototype.modPowInt = function(t, e) { var i; return i = t < 256 || e.isEven() ? new I(e) : new N(e), this.exp(t, i) }, b.prototype.clone = function() { var t = M(); return this.copyTo(t), t }, b.prototype.intValue = function() { if (this.s < 0) { if (1 == this.t) return this[0] - this.DV; if (0 == this.t) return -1 } else { if (1 == this.t) return this[0]; if (0 == this.t) return 0 } return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0] }, b.prototype.byteValue = function() { return 0 == this.t ? this.s : this[0] << 24 >> 24 }, b.prototype.shortValue = function() { return 0 == this.t ? this.s : this[0] << 16 >> 16 }, b.prototype.signum = function() { return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1 }, b.prototype.toByteArray = function() {
                var t = this.t,
                    e = [];
                e[0] = this.s;
                var i, r = this.DB - t * this.DB % 8,
                    n = 0;
                if (0 < t--)
                    for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[n++] = i | this.s << this.DB - r); 0 <= t;) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == n && (128 & this.s) != (128 & i) && ++n, (0 < n || i != this.s) && (e[n++] = i);
                return e
            }, b.prototype.equals = function(t) { return 0 == this.compareTo(t) }, b.prototype.min = function(t) { return this.compareTo(t) < 0 ? this : t }, b.prototype.max = function(t) { return 0 < this.compareTo(t) ? this : t }, b.prototype.and = function(t) { var e = M(); return this.bitwiseTo(t, i, e), e }, b.prototype.or = function(t) { var e = M(); return this.bitwiseTo(t, u, e), e }, b.prototype.xor = function(t) { var e = M(); return this.bitwiseTo(t, r, e), e }, b.prototype.andNot = function(t) { var e = M(); return this.bitwiseTo(t, n, e), e }, b.prototype.not = function() { for (var t = M(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e]; return t.t = this.t, t.s = ~this.s, t }, b.prototype.shiftLeft = function(t) { var e = M(); return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e }, b.prototype.shiftRight = function(t) { var e = M(); return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e }, b.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t]) return t * this.DB + s(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }, b.prototype.bitCount = function() { for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += o(this[i] ^ e); return t }, b.prototype.testBit = function(t) { var e = Math.floor(t / this.DB); return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB) }, b.prototype.setBit = function(t) { return this.changeBit(t, u) }, b.prototype.clearBit = function(t) { return this.changeBit(t, n) }, b.prototype.flipBit = function(t) { return this.changeBit(t, r) }, b.prototype.add = function(t) { var e = M(); return this.addTo(t, e), e }, b.prototype.subtract = function(t) { var e = M(); return this.subTo(t, e), e }, b.prototype.multiply = function(t) { var e = M(); return this.multiplyTo(t, e), e }, b.prototype.divide = function(t) { var e = M(); return this.divRemTo(t, e, null), e }, b.prototype.remainder = function(t) { var e = M(); return this.divRemTo(t, null, e), e }, b.prototype.divideAndRemainder = function(t) {
                var e = M(),
                    i = M();
                return this.divRemTo(t, e, i), [e, i]
            }, b.prototype.modPow = function(t, e) {
                var i, r, n = t.bitLength(),
                    s = F(1);
                if (n <= 0) return s;
                i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, r = n < 8 ? new I(e) : e.isEven() ? new P(e) : new N(e);
                var o = [],
                    h = 3,
                    a = i - 1,
                    u = (1 << i) - 1;
                if (o[1] = r.convert(this), 1 < i) { var c = M(); for (r.sqrTo(o[1], c); h <= u;) o[h] = M(), r.mulTo(c, o[h - 2], o[h]), h += 2 }
                var f, l, p = t.t - 1,
                    g = !0,
                    d = M();
                for (n = U(t[p]) - 1; 0 <= p;) {
                    for (a <= n ? f = t[p] >> n - a & u : (f = (t[p] & (1 << n + 1) - 1) << a - n, 0 < p && (f |= t[p - 1] >> this.DB + n - a)), h = i; 0 == (1 & f);) f >>= 1, --h;
                    if ((n -= h) < 0 && (n += this.DB, --p), g) o[f].copyTo(s), g = !1;
                    else {
                        for (; 1 < h;) r.sqrTo(s, d), r.sqrTo(d, s), h -= 2;
                        0 < h ? r.sqrTo(s, d) : (l = s, s = d, d = l), r.mulTo(d, o[f], s)
                    }
                    for (; 0 <= p && 0 == (t[p] & 1 << n);) r.sqrTo(s, d), l = s, s = d, d = l, --n < 0 && (n = this.DB - 1, --p)
                }
                return r.revert(s)
            }, b.prototype.modInverse = function(t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum()) return b.ZERO;
                for (var i = t.clone(), r = this.clone(), n = F(1), s = F(0), o = F(0), h = F(1); 0 != i.signum();) {
                    for (; i.isEven();) i.rShiftTo(1, i), e ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                    for (; r.isEven();) r.rShiftTo(1, r), e ? (o.isEven() && h.isEven() || (o.addTo(this, o), h.subTo(t, h)), o.rShiftTo(1, o)) : h.isEven() || h.subTo(t, h), h.rShiftTo(1, h);
                    0 <= i.compareTo(r) ? (i.subTo(r, i), e && n.subTo(o, n), s.subTo(h, s)) : (r.subTo(i, r), e && o.subTo(n, o), h.subTo(s, h))
                }
                return 0 != r.compareTo(b.ONE) ? b.ZERO : 0 <= h.compareTo(t) ? h.subtract(t) : h.signum() < 0 ? (h.addTo(t, h), h.signum() < 0 ? h.add(t) : h) : h
            }, b.prototype.pow = function(t) { return this.exp(t, new V) }, b.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone(),
                    i = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(i) < 0) {
                    var r = e;
                    e = i, i = r
                }
                var n = e.getLowestSetBit(),
                    s = i.getLowestSetBit();
                if (s < 0) return e;
                for (n < s && (s = n), 0 < s && (e.rShiftTo(s, e), i.rShiftTo(s, i)); 0 < e.signum();) 0 < (n = e.getLowestSetBit()) && e.rShiftTo(n, e), 0 < (n = i.getLowestSetBit()) && i.rShiftTo(n, i), 0 <= e.compareTo(i) ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                return 0 < s && i.lShiftTo(s, i), i
            }, b.prototype.isProbablePrime = function(t) {
                var e, i = this.abs();
                if (1 == i.t && i[0] <= B[B.length - 1]) {
                    for (e = 0; e < B.length; ++e)
                        if (i[0] == B[e]) return !0;
                    return !1
                }
                if (i.isEven()) return !1;
                for (e = 1; e < B.length;) {
                    for (var r = B[e], n = e + 1; n < B.length && r < A;) r *= B[n++];
                    for (r = i.modInt(r); e < n;)
                        if (r % B[e++] == 0) return !1
                }
                return i.millerRabin(t)
            }, b.prototype.copyTo = function(t) {
                for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s
            }, b.prototype.fromInt = function(t) { this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0 }, b.prototype.fromString = function(t, e) {
                var i;
                if (16 == e) i = 4;
                else if (8 == e) i = 3;
                else if (256 == e) i = 8;
                else if (2 == e) i = 1;
                else if (32 == e) i = 5;
                else {
                    if (4 != e) return void this.fromRadix(t, e);
                    i = 2
                }
                this.t = 0, this.s = 0;
                for (var r = t.length, n = !1, s = 0; 0 <= --r;) {
                    var o = 8 == i ? 255 & +t[r] : C(t, r);
                    o < 0 ? "-" == t.charAt(r) && (n = !0) : (n = !1, 0 == s ? this[this.t++] = o : s + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += i) >= this.DB && (s -= this.DB))
                }
                8 == i && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), n && b.ZERO.subTo(this, this)
            }, b.prototype.clamp = function() { for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t }, b.prototype.dlShiftTo = function(t, e) {
                var i;
                for (i = this.t - 1; 0 <= i; --i) e[i + t] = this[i];
                for (i = t - 1; 0 <= i; --i) e[i] = 0;
                e.t = this.t + t, e.s = this.s
            }, b.prototype.drShiftTo = function(t, e) {
                for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                e.t = Math.max(this.t - t, 0), e.s = this.s
            }, b.prototype.lShiftTo = function(t, e) {
                for (var i = t % this.DB, r = this.DB - i, n = (1 << r) - 1, s = Math.floor(t / this.DB), o = this.s << i & this.DM, h = this.t - 1; 0 <= h; --h) e[h + s + 1] = this[h] >> r | o, o = (this[h] & n) << i;
                for (h = s - 1; 0 <= h; --h) e[h] = 0;
                e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp()
            }, b.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var i = Math.floor(t / this.DB);
                if (i >= this.t) e.t = 0;
                else {
                    var r = t % this.DB,
                        n = this.DB - r,
                        s = (1 << r) - 1;
                    e[0] = this[i] >> r;
                    for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & s) << n, e[o - i] = this[o] >> r;
                    0 < r && (e[this.t - i - 1] |= (this.s & s) << n), e.t = this.t - i, e.clamp()
                }
            }, b.prototype.subTo = function(t, e) {
                for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r -= t.s
                }
                e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : 0 < r && (e[i++] = r), e.t = i, e.clamp()
            }, b.prototype.multiplyTo = function(t, e) {
                var i = this.abs(),
                    r = t.abs(),
                    n = i.t;
                for (e.t = n + r.t; 0 <= --n;) e[n] = 0;
                for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
                e.s = 0, e.clamp(), this.s != t.s && b.ZERO.subTo(e, e)
            }, b.prototype.squareTo = function(t) {
                for (var e = this.abs(), i = t.t = 2 * e.t; 0 <= --i;) t[i] = 0;
                for (i = 0; i < e.t - 1; ++i) {
                    var r = e.am(i, e[i], t, 2 * i, 0, 1);
                    (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                }
                0 < t.t && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
            }, b.prototype.divRemTo = function(t, e, i) {
                var r = t.abs();
                if (!(r.t <= 0)) {
                    var n = this.abs();
                    if (n.t < r.t) return null != e && e.fromInt(0), void(null != i && this.copyTo(i));
                    null == i && (i = M());
                    var s = M(),
                        o = this.s,
                        h = t.s,
                        a = this.DB - U(r[r.t - 1]);
                    0 < a ? (r.lShiftTo(a, s), n.lShiftTo(a, i)) : (r.copyTo(s), n.copyTo(i));
                    var u = s.t,
                        c = s[u - 1];
                    if (0 != c) {
                        var f = c * (1 << this.F1) + (1 < u ? s[u - 2] >> this.F2 : 0),
                            l = this.FV / f,
                            p = (1 << this.F1) / f,
                            g = 1 << this.F2,
                            d = i.t,
                            v = d - u,
                            m = null == e ? M() : e;
                        for (s.dlShiftTo(v, m), 0 <= i.compareTo(m) && (i[i.t++] = 1, i.subTo(m, i)), b.ONE.dlShiftTo(u, m), m.subTo(s, s); s.t < u;) s[s.t++] = 0;
                        for (; 0 <= --v;) {
                            var y = i[--d] == c ? this.DM : Math.floor(i[d] * l + (i[d - 1] + g) * p);
                            if ((i[d] += s.am(0, y, i, v, 0, u)) < y)
                                for (s.dlShiftTo(v, m), i.subTo(m, i); i[d] < --y;) i.subTo(m, i)
                        }
                        null != e && (i.drShiftTo(u, e), o != h && b.ZERO.subTo(e, e)), i.t = u, i.clamp(), 0 < a && i.rShiftTo(a, i), o < 0 && b.ZERO.subTo(i, i)
                    }
                }
            }, b.prototype.invDigit = function() { if (this.t < 1) return 0; var t = this[0]; if (0 == (1 & t)) return 0; var e = 3 & t; return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e }, b.prototype.isEven = function() { return 0 == (0 < this.t ? 1 & this[0] : this.s) }, b.prototype.exp = function(t, e) {
                if (4294967295 < t || t < 1) return b.ONE;
                var i = M(),
                    r = M(),
                    n = e.convert(this),
                    s = U(t) - 1;
                for (n.copyTo(i); 0 <= --s;)
                    if (e.sqrTo(i, r), 0 < (t & 1 << s)) e.mulTo(r, n, i);
                    else {
                        var o = i;
                        i = r, r = o
                    }
                return e.revert(i)
            }, b.prototype.chunkSize = function(t) { return Math.floor(Math.LN2 * this.DB / Math.log(t)) }, b.prototype.toRadix = function(t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                var e = this.chunkSize(t),
                    i = Math.pow(t, e),
                    r = F(i),
                    n = M(),
                    s = M(),
                    o = "";
                for (this.divRemTo(r, n, s); 0 < n.signum();) o = (i + s.intValue()).toString(t).substr(1) + o, n.divRemTo(r, n, s);
                return s.intValue().toString(t) + o
            }, b.prototype.fromRadix = function(t, e) {
                this.fromInt(0), null == e && (e = 10);
                for (var i = this.chunkSize(e), r = Math.pow(e, i), n = !1, s = 0, o = 0, h = 0; h < t.length; ++h) {
                    var a = C(t, h);
                    a < 0 ? "-" == t.charAt(h) && 0 == this.signum() && (n = !0) : (o = e * o + a, ++s >= i && (this.dMultiply(r), this.dAddOffset(o, 0), o = s = 0))
                }
                0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), n && b.ZERO.subTo(this, this)
            }, b.prototype.fromNumber = function(t, e, i) {
                if ("number" == typeof e)
                    if (t < 2) this.fromInt(1);
                    else
                        for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(b.ONE.shiftLeft(t - 1), this);
                else {
                    var r = [],
                        n = 7 & t;
                    r.length = 1 + (t >> 3), e.nextBytes(r), 0 < n ? r[0] &= (1 << n) - 1 : r[0] = 0, this.fromString(r, 256)
                }
            }, b.prototype.bitwiseTo = function(t, e, i) {
                var r, n, s = Math.min(t.t, this.t);
                for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
                if (t.t < this.t) {
                    for (n = t.s & this.DM, r = s; r < this.t; ++r) i[r] = e(this[r], n);
                    i.t = this.t
                } else {
                    for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
                    i.t = t.t
                }
                i.s = e(this.s, t.s), i.clamp()
            }, b.prototype.changeBit = function(t, e) { var i = b.ONE.shiftLeft(t); return this.bitwiseTo(i, e, i), i }, b.prototype.addTo = function(t, e) {
                for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += t.s
                }
                e.s = r < 0 ? -1 : 0, 0 < r ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
            }, b.prototype.dMultiply = function(t) { this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp() }, b.prototype.dAddOffset = function(t, e) { if (0 != t) { for (; this.t <= e;) this[this.t++] = 0; for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e] } }, b.prototype.multiplyLowerTo = function(t, e, i) {
                var r = Math.min(this.t + t.t, e);
                for (i.s = 0, i.t = r; 0 < r;) i[--r] = 0;
                for (var n = i.t - this.t; r < n; ++r) i[r + this.t] = this.am(0, t[r], i, r, 0, this.t);
                for (n = Math.min(t.t, e); r < n; ++r) this.am(0, t[r], i, r, 0, e - r);
                i.clamp()
            }, b.prototype.multiplyUpperTo = function(t, e, i) {
                --e;
                var r = i.t = this.t + t.t - e;
                for (i.s = 0; 0 <= --r;) i[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                i.clamp(), i.drShiftTo(1, i)
            }, b.prototype.modInt = function(t) {
                if (t <= 0) return 0;
                var e = this.DV % t,
                    i = this.s < 0 ? t - 1 : 0;
                if (0 < this.t)
                    if (0 == e) i = this[0] % t;
                    else
                        for (var r = this.t - 1; 0 <= r; --r) i = (e * i + this[r]) % t;
                return i
            }, b.prototype.millerRabin = function(t) {
                var e = this.subtract(b.ONE),
                    i = e.getLowestSetBit();
                if (i <= 0) return !1;
                var r = e.shiftRight(i);
                B.length < (t = t + 1 >> 1) && (t = B.length);
                for (var n = M(), s = 0; s < t; ++s) {
                    n.fromInt(B[Math.floor(Math.random() * B.length)]);
                    var o = n.modPow(r, this);
                    if (0 != o.compareTo(b.ONE) && 0 != o.compareTo(e)) {
                        for (var h = 1; h++ < i && 0 != o.compareTo(e);)
                            if (0 == (o = o.modPowInt(2, this)).compareTo(b.ONE)) return !1;
                        if (0 != o.compareTo(e)) return !1
                    }
                }
                return !0
            }, b.prototype.square = function() { var t = M(); return this.squareTo(t), t }, b.prototype.gcda = function(t, e) {
                var i = this.s < 0 ? this.negate() : this.clone(),
                    r = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(r) < 0) {
                    var n = i;
                    i = r, r = n
                }
                var s = i.getLowestSetBit(),
                    o = r.getLowestSetBit();
                if (o < 0) e(i);
                else {
                    s < o && (o = s), 0 < o && (i.rShiftTo(o, i), r.rShiftTo(o, r));
                    var h = function() { 0 < (s = i.getLowestSetBit()) && i.rShiftTo(s, i), 0 < (s = r.getLowestSetBit()) && r.rShiftTo(s, r), 0 <= i.compareTo(r) ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r)), 0 < i.signum() ? setTimeout(h, 0) : (0 < o && r.lShiftTo(o, r), setTimeout(function() { e(r) }, 0)) };
                    setTimeout(h, 10)
                }
            }, b.prototype.fromNumberAsync = function(t, e, i, r) {
                if ("number" == typeof e)
                    if (t < 2) this.fromInt(1);
                    else {
                        this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(b.ONE.shiftLeft(t - 1), u, this), this.isEven() && this.dAddOffset(1, 0);
                        var n = this,
                            s = function() { n.dAddOffset(2, 0), n.bitLength() > t && n.subTo(b.ONE.shiftLeft(t - 1), n), n.isProbablePrime(e) ? setTimeout(function() { r() }, 0) : setTimeout(s, 0) };
                        setTimeout(s, 0)
                    }
                else {
                    var o = [],
                        h = 7 & t;
                    o.length = 1 + (t >> 3), e.nextBytes(o), 0 < h ? o[0] &= (1 << h) - 1 : o[0] = 0, this.fromString(o, 256)
                }
            }, b
        }


b= O();

var k, _, z = 256, Z = null;
if (null == Z) {
    Z = [];
    var G = void (_ = 0);
    // if (window.crypto && window.crypto.getRandomValues) {
    //     var $ = new Uint32Array(256);
    //     for (window.crypto.getRandomValues($),
    //              G = 0; G < $.length; ++G)
    //         Z[_++] = 255 & $[G]
    // }
    var Y = function (t) {
        if (this.count = this.count || 0,
        256 <= this.count || z <= _)
            window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y);
        else
            try {
                var e = t.x + t.y;
                Z[_++] = 255 & e,
                    this.count += 1
            } catch (t) {
            }
    };
    window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y)
}

function J() {
    if (null == k) {
        for (k = new K; _ < z;) {
            var t = Math.floor(65536 * Math.random());
            Z[_++] = 255 & t
        }
        for (k.init(Z),
                 _ = 0; _ < Z.length; ++_)
            Z[_] = 0;
        _ = 0
    }
    return k.next()
}

var X = function () {
    function t() {
    }

    return t.prototype.nextBytes = function (t) {
        for (var e = 0; e < t.length; ++e)
            t[e] = J()
    }
        ,
        t
}();

var Q = function () {
    function t() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    }
    // window.t = t;
    return t.prototype.doPublic = function (t) {
        return t.modPowInt(this.e, this.n)
    }
        ,
        t.prototype.doPrivate = function (t) {
            if (null == this.p || null == this.q)
                return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;)
                e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }
        ,
        t.prototype.setPublic = function (t, e) {
            null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = q(t, 16),
                this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }
        ,
        t.prototype.encrypt = function (t) {
            var e = function (t, e) {
                if (e < t.length + 11)
                    return console.error("Message too long for RSA"),
                        null;
                for (var i = [], r = t.length - 1; 0 <= r && 0 < e;) {
                    var n = t.charCodeAt(r--);
                    n < 128 ? i[--e] = n : 127 < n && n < 2048 ? (i[--e] = 63 & n | 128,
                        i[--e] = n >> 6 | 192) : (i[--e] = 63 & n | 128,
                        i[--e] = n >> 6 & 63 | 128,
                        i[--e] = n >> 12 | 224)
                }
                i[--e] = 0;
                for (var s = new X, o = []; 2 < e;) {
                    for (o[0] = 0; 0 == o[0];)
                        s.nextBytes(o);
                    i[--e] = o[0]
                }
                return i[--e] = 2,
                    i[--e] = 0,
                    new O(i)
            }(t, b.prototype.bitLength() + 7 >> 3);
            if (null == e)
                return null;
            var i = this.doPublic(e);
            if (null == i)
                return null;
            var r = i.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }
        ,
        t.prototype.setPrivate = function (t, e, i) {
            null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = q(t, 16),
                this.e = parseInt(e, 16),
                this.d = q(i, 16)) : console.error("Invalid RSA private key")
        }
        ,
        t.prototype.setPrivateEx = function (t, e, i, r, n, s, o, h) {
            null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = q(t, 16),
                this.e = parseInt(e, 16),
                this.d = q(i, 16),
                this.p = q(r, 16),
                this.q = q(n, 16),
                this.dmp1 = q(s, 16),
                this.dmq1 = q(o, 16),
                this.coeff = q(h, 16)) : console.error("Invalid RSA private key")
        }
        ,
        t.prototype.generate = function (t, e) {
            var i = new X
                , r = t >> 1;
            this.e = parseInt(e, 16);
            for (var n = new O(e, 16); ;) {
                for (; this.p = new O(t - r, 1, i),
                       0 != this.p.subtract(O.ONE).gcd(n).compareTo(O.ONE) || !this.p.isProbablePrime(10);)
                    ;
                for (; this.q = new O(r, 1, i),
                       0 != this.q.subtract(O.ONE).gcd(n).compareTo(O.ONE) || !this.q.isProbablePrime(10);)
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var s = this.p;
                    this.p = this.q,
                        this.q = s
                }
                var o = this.p.subtract(O.ONE)
                    , h = this.q.subtract(O.ONE)
                    , a = o.multiply(h);
                if (0 == a.gcd(n).compareTo(O.ONE)) {
                    this.n = this.p.multiply(this.q),
                        this.d = n.modInverse(a),
                        this.dmp1 = this.d.mod(o),
                        this.dmq1 = this.d.mod(h),
                        this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        ,
        t.prototype.decrypt = function (t) {
            var e = q(t, 16)
                , i = this.doPrivate(e);
            return null == i ? null : function (t, e) {
                var i = t.toByteArray()
                    , r = 0;
                for (; r < i.length && 0 == i[r];)
                    ++r;
                if (i.length - r != e - 1 || 2 != i[r])
                    return null;
                ++r;
                for (; 0 != i[r];)
                    if (++r >= i.length)
                        return null;
                var n = "";
                for (; ++r < i.length;) {
                    var s = 255 & i[r];
                    s < 128 ? n += String.fromCharCode(s) : 191 < s && s < 224 ? (n += String.fromCharCode((31 & s) << 6 | 63 & i[r + 1]),
                        ++r) : (n += String.fromCharCode((15 & s) << 12 | (63 & i[r + 1]) << 6 | 63 & i[r + 2]),
                        r += 2)
                }
                return n
            }(i, this.n.bitLength() + 7 >> 3)
        }
        ,
        t.prototype.generateAsync = function (t, e, n) {
            var s = new X
                , o = t >> 1;
            this.e = parseInt(e, 16);
            var h = new O(e, 16)
                , a = this
                , u = function () {
                var e = function () {
                    if (a.p.compareTo(a.q) <= 0) {
                        var t = a.p;
                        a.p = a.q,
                            a.q = t
                    }
                    var e = a.p.subtract(O.ONE)
                        , i = a.q.subtract(O.ONE)
                        , r = e.multiply(i);
                    0 == r.gcd(h).compareTo(O.ONE) ? (a.n = a.p.multiply(a.q),
                        a.d = h.modInverse(r),
                        a.dmp1 = a.d.mod(e),
                        a.dmq1 = a.d.mod(i),
                        a.coeff = a.q.modInverse(a.p),
                        setTimeout(function () {
                            n()
                        }, 0)) : setTimeout(u, 0)
                }
                    , i = function () {
                    a.q = M(),
                        a.q.fromNumberAsync(o, 1, s, function () {
                            a.q.subtract(O.ONE).gcda(h, function (t) {
                                0 == t.compareTo(O.ONE) && a.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(i, 0)
                            })
                        })
                }
                    , r = function () {
                    a.p = M(),
                        a.p.fromNumberAsync(t - o, 1, s, function () {
                            a.p.subtract(O.ONE).gcda(h, function (t) {
                                0 == t.compareTo(O.ONE) && a.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(r, 0)
                            })
                        })
                };
                setTimeout(r, 0)
            };
            setTimeout(u, 0)
        }
        ,
        t.prototype.sign = function (t, e, i) {
            var r = function (t, e) {
                if (e < t.length + 22)
                    return console.error("Message too long for RSA"),
                        null;
                for (var i = e - t.length - 6, r = "", n = 0; n < i; n += 2)
                    r += "ff";
                return q("0001" + r + "00" + t, 16)
            }((W[i] || "") + e(t).toString(), this.n.bitLength() / 4);
            if (null == r)
                return null;
            var n = this.doPrivate(r);
            if (null == n)
                return null;
            var s = n.toString(16);
            return 0 == (1 & s.length) ? s : "0" + s
        }
        ,
        t.prototype.verify = function (t, e, i) {
            var r = q(e, 16)
                , n = this.doPublic(r);
            return null == n ? null : function (t) {
                for (var e in W)
                    if (W.hasOwnProperty(e)) {
                        var i = W[e]
                            , r = i.length;
                        if (t.substr(0, r) == i)
                            return t.substr(r)
                    }
                return t
            }(n.toString(16).replace(/^1f+00/, "")) == i(t).toString()
        }
        ,
        t
};

t = Q()

console.log(t.prototype.encrypt('123456'))