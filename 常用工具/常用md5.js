const CryptoJS = require('crypto-js');

const data = '123456'

const md5Digest = CryptoJS.MD5(data).toString();

console.log(md5Digest)