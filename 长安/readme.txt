https://bqcm0.cavip1.com/

1.search "/wps/session/login" 或者 Encryption 都能很快的找到入口
return new Promise(function(e, n) {
            var i = utils.rndString();
            $.ajax({
                url: "/wps/session/login",
                method: "POST",
                headers: {
                    Encryption: RSAEncrypt(i.split("").reverse().join("")),
                    ModuleId: "COMM3"
                },
                contentType: "application/json",
                data: utils.desEncrypt(JSON.stringify(a), i)
            }).done(function(n)

2.在  Encryption: RSAEncrypt(i.split("").reverse().join("")), 打断点，查看RSAEncrypt

3.定位到位置
function RSAEncrypt(e) {
    var t = getPublicKey();
    return null == t ? null : (setMaxDigits(130),
    encryptedString(new RSAKeyPair("10001","",t), e))
}
function getPublicKey() {
    var e = "";
    return $.ajax({
        type: "GET",
        url: "/wps/session/key/rsa",
        async: !1,
        complete: function(t) {
            e = t.responseText
        }
    }),
    e
}

可以看出 key值是通过ajax  getPublicKey  发送得到的，
尝试发送了一下数据 ：https://bqcm0.cavip1.com/wps/session/key/rsa 得到了数据。这个数据就是t值


