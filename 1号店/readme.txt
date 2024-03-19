1. username,password,captchatoken 都是加密数据

2. 直接search搜，发现了这几个一堆
h = {
        "credentials.username": k,
        "credentials.password": j,
        validCode: g,
        sig: $("#validateSig").val(),
        is_jab: "true",
        captchaToken: window.jab ? window.jab.getData() : "",
        jab_st: window.jab_st,
        ....

3. 往前看
    var k = $("#un").val();  ----- 输入值
    var j = $("#pwd").val();  -----输入值
    var i = new JSEncrypt();
    i.setPublicKey(pubkey);
    j = i.encrypt(j);
    k = i.encrypt(k);
    pubkey = MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXQG8rnxhslm+2f7Epu3bB0inrnCaTHhUQCYE+2X+qWQgcpn+Hvwyks3A67mvkIcyvV0ED3HFDf+ANoMWV1Ex56dKqOmSUmjrk7s5cjQeiIsxX7Q3hSzO61/kLpKNH+NE6iAPpm96Fg15rCjbm+5rR96DhLNG7zt2JgOd2o1wXkQIDAQAB

4.直接js，rsa_encrypt 用户名，密码加密。

5. window.jab = new JAB({bizId: 'PASSPORT_LOGIN',initCaptcha: true});
然后调用  然后调用jab.getdata()

6.补环境......
