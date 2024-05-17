var rs = require("jsrsasign");


var f, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = "=";

function d(t) {
    var e, r, i = "";
    for (e = 0; e + 3 <= t.length; e += 3)
        r = parseInt(t.substring(e, e + 3), 16),
            i += g.charAt(r >> 6) + g.charAt(63 & r);
    for (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16),
        i += g.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16),
        i += g.charAt(r >> 2) + g.charAt((3 & r) << 4)); (3 & i.length) > 0;)
        i += p;
    return i
}

function de(e)
{
    let n = {};
    if (null == e || "" === e)
        return "";
    let t = JSON.parse(e)
      , r = Object.keys(t).sort();
    for (let o = 0; o < r.length; o++) {
        let e = t[r[o]];
        null != e && (n[r[o]] = t[r[o]])
    }
    return JSON.stringify(n)
}

// 秘钥
var privateKeyString = `-----BEGIN PRIVATE KEY-----
  MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdgJNfUFPDNJsL
  HObB1JMu7E1+nuwkFHmXnBU2AOM2dweE+tpmViZo90w+YQIuIS8MoVz60AGHbLE8
  BYcdxQEKmPsqq0Lq/1ltIdp1YcO9W60qSxwpZS+7o73ljRrrtOXcE1UUpH5l07Fh
  ziCIRDI/4ODCA8AJ1kV6IyfPNM2Fes3BEqhMOgw4Z5i4pZHnb4Nm+4kEXmyM+UgQ
  cShcXZA/dx5MXKA2Bbb0I0G6HS3D4nMhnm6IgYWEyT8ngenMOyy+ysBuHWt2j9Cp
  AGLWRyqHigFcKTlP5BSIkU+8sqssab1jvDg2F8MXWuupwF43OVARgHofiwQBAHPo
  PfTfPlMvAgMBAAECggEBAJKQpZNasrfCak0LFgllgZl2uB6OUPy6OPRGgM6CQO3c
  EhlDPp1gqdmf10ltCJRYuOmt91JG4kVddgh+tF+VhgSQm5n3SQxZlqQhjqMQ2Q+L
  Ejd7Mberu6GHHB1TE6wn6IbFTrUo5Z5oQnbbVBa6L3CWGVEyIDCHPpwLvu3pGx+L
  083dNQUiF8WcSGybl1h4ZapAGdndPYJReKYccNBYu5IzTEjtG3VpMHl56hD8fPV8
  SStYv4sEffyCbze5/KvG3WlG+8n1WzBRMAN1U8Qk3JlMM/g5Y2tL1elI2pQRmjH8
  EVxNUzB9Ob/qk2N6pF4KwhDWjILkHdoXilHMgP5x0gECgYEAy9O9ShtRNwXdFzHe
  v+buyjvWWvwTVRUBehe8BWO1QaZ4c/INw1Ks4pgoKvXyU1DRx5OloIx6BWDbs00O
  1W1cDue2I/Ymvx5Q/XJmZK4eR2U3a2dmKLKVhCXhJ3y02R/OZ2xQHV3NZXqz88kf
  rEmEKYTW9q2gVsZa82XpQhKnBYECgYEAxdFJ55AkU7VfzpV1x68NUetomB3OWxyq
  Cugn3STLNx7Jw6FaK3dwRz0eKIbwCRxtlluZmxWX0jWSvj3cyLRBIKTD8atUfJW2
  +ESKZb/i961HhhQjXqNfGQpmMdEazNqv0sDzQ5jHHIjc63oty/FjckcC+AaDGZIJ
  VGCet5J5kK8CgYBm2R/Bfgk792R5KLvaHz/MoebmoB1tKB1HqyQ/n/E9AC/1aWUS
  cuwzpk1WaCXvbm98Af9oBJopjpctYSuj+/ugtcDNYo5oj3aUfJ44HTfAFM2jD1iY
  HoydUrPKxf1HNepje17tgoB6vTCCSbEGsU3T2WjSrgei4ZHREVJi+aB3gQKBgEy8
  rm2sxdrPHjZWVlU6+/DOYEm6LkW77d7DRkuMLWTZha1lF0SLVbvc4qkYB1+RbpWI
  PSMjEj0SWTWBa/dTrXwLTpOeQez+avcOJ53m/RXVW0yQ3VOmDor5NMGYe0wCfXhF
  L1kGmB7inMigIcnefxRipa0vYYX217WqsYdGw++zAoGBALKswyV5j1GjVjN+fS1t
  N9R0x+S7cKBqW6Bwj6aAdo4+spmRn9WK4h9Zk2k7BMUiqJKTce6RdW0Ep+aTErRs
  LL0sBHArhQdaQvq0yS57BJUZm3ASrOpp3wkQdDejS3YEKiIQSG2kNFRanh8RbtbA
  ac7pfLikyQm795/qF0H9YHgF
  -----END PRIVATE KEY-----
`;

// 获取签名
function getSHA256withRSA(content) {

    let o = (new Date).getTime();
    let t = '/byairport-flight/flight/list';
    let r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
            const n = 16 * Math.random() | 0;
            return ("x" == e ? n : 3 & n | 8).toString(16)
        }
    ))

    data = "Timestamp&" + o + "&" + t + "&" + r + "&" + de(content)
    // data = 'Timestamp&'+o+'&/byairport-flight/flight/list&6adcba96-25e6-499b-ae9e-1c5e3239595e&'+content

    const key = rs.KEYUTIL.getKey(privateKeyString);
    // 创建 Signature 对象，设置签名编码算法
    const signature = new rs.KJUR.crypto.Signature({alg: "SHA256withRSA"});
    // 初始化
    signature.init(key);

    signature.updateString(data);
    // 生成密文
    const originSign = d(signature.sign());
    // console.log(originSign)
    // d()
    return [originSign, o, r]
    // return rs.hextob64(originSign);
}

// let content = 'Timestamp&1715567156340&/byairport-flight/flight/list&6adcba96-25e6-499b-ae9e-1c5e3239595e&{"day":0,"depOrArr":"1","pageNum":1,"pageSize":15,"terminal":"","type":"1"}'
// sign = getSHA256withRSA(content)
// // signature = d(sign)
// console.log(sign);

