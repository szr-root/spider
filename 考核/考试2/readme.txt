1. 关键字直接搜 portal-sign
t.headers["portal-sign"] = f.getSign(e),
e = {
    "ts": 1715521865062,
    "pageNo": 2,
    "pageSize": 20,
    "total": 3664,
    "KIND": "GCJS",
    "GGTYPE": "1",
    "timeType": "6",
    "BeginTime": "2023-11-12 00:00:00",
    "EndTime": "2024-05-12 23:59:59",
    "createTime": []
}

2. u(n).toLocaleLowerCase()

n =
B3978D054A72A7002063637CCDF6B2E5BeginTime2023-11-12 00:00:00createTime[]EndTime2024-05-12 23:59:59GGTYPE1KINDGCJSpageNo2pageSize20timeType6total3664ts1715521865062

3. return new Md5(!0).update(e)[t]()
     试了一下，就是md5加密啊
    new Md5(!0).update('123456')[t]()

4. B3978D054A72A7002063637CCDF6B2E5固定，后面按字母顺序排，为空就不加入

解密：
5.直接搜decrypt(

6.很明显看到解密是aes.cbc
e = h.a.enc.Utf8.parse(r["e"])
              , n = h.a.enc.Utf8.parse(r["i"])
              , a = h.a.AES.decrypt(t, e, {
                iv: n,
                mode: h.a.mode.CBC,
                padding: h.a.pad.Pkcs7
            })；