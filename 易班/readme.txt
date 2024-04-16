1. search搜 encrypt(
直接找到加密      data.password = encrypt.encrypt($.trim($passwordTxt.val()));

2.看了一下附近，encrypt.setPublicKey(g_param.keys);
g_param.keys 这个是个public key，应该就是个rsa加密

但是这个rid怎么来的？
