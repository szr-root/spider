http://login.wsgjp.com.cn/

1. 通过search ati\b 找到了登录入口，不过这里数据已经加密了

2. 往上再查看一个堆栈，找到加密逻辑
    setMaxDigits(129);
    var key = new RSAKeyPair();
    var password = encryptedString(key, $.trim($('#password').val()));
    var username = encryptedString(key, encodeURIComponent($.trim($("#username").val())));

  ps：这个 setMaxDigits(129); 不加的话一直没有结果