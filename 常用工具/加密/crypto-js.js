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