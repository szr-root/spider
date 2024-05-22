window = global;
// npm install crypto-js
//=======================================crypto
const CryptoJS = require('crypto-js');

function cryptoMd5(data) {
    // 执行MD5加密
    const encrypted = CryptoJS.MD5(data);
    // 获取加密结果的十六进制表示
    return encrypted.toString();
}

function cryptoSha1(data) {
    // 执行SHA-1加密
    const encrypted = CryptoJS.SHA1(data);

    // 获取加密结果的十六进制表示
    return encrypted.toString();
}

function cryptoSha384(data) {
    // 执行SHA-384加密
    const encrypted = CryptoJS.SHA384(data);
    // 获取加密结果的十六进制表示
    return encrypted.toString();
}

K = {
    "nonce": "9cc01ffc90c81b16989a00580dc92c6b",
    "timestamp": "1716383484922",
    "deviceId": "b4caa38-8dd2-4cb5-941a-61a265617",
    "secret": "EOi^0N5sWWHhkrF2A0gekY9U20BgnAcr",
    "secretType": 2
}
R = (d = K).nonce

j = d.timestamp
T = d.deviceId
I = d.secret
P = d.secretType
m = R
L = cryptoMd5(m).toString()
console.log("L:::", L)
y = j
B = cryptoSha1(y).toString()
console.log("B:::", B)
_ = T
M = R
N = cryptoMd5(M + _).toString()
console.log("N:::", N)
x = I
k = j
C = ""