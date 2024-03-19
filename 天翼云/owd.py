# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/17
# @File : owd.py
import uuid
import random
import time
from hashlib import md5


# 获取seq_code
a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
seqcode_list = []
seq_code = ''
for i in range(32):
    seqcode_list.append(random.choice(a))
    seq_code = ''.join(seqcode_list)

# n = (new Date).getTime() - h.getTimestampOffset()
t = "s54zv9bm1vd5czfujy6nnuxj1l4g2ny6"
n = str(int(time.time()*1000) - (-244))
r = seq_code


# 获取signature
md5 = md5()
md5.update((r+t+n).encode())
f1 = md5.hexdigest()

md5.update((n+r+f1).encode())
signature = md5.hexdigest()



uname = '12345@163.com'
pwd = '121345'


# 1.获取密码加密，JS版本
# import execjs
# with open('pwd.js') as f:
#     Jscode = f.read()
#
# js = execjs.compile(Jscode)
# encrypt_pwd = js.call('fn', pwd, uname)
# print(encrypt_pwd)


# 密码获取，python版本
from Crypto.Cipher import DES3
from Crypto.Util.Padding import pad

key = uname + '0'*(24-len(uname))
print(key)
cipher = DES3.new(key, DES3.MODE_ECB)
pwd = pad(pwd.encode(),8)
cipher_text = cipher.encrypt(pwd)
print("加密后的数据:", cipher_text)

import base64
encrypt_pwd = base64.b64encode(cipher_text)
print(encrypt_pwd)





# 获取请求
import requests

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://m.ctyun.cn",
    "Referer": "https://m.ctyun.cn/wap/main/auth/login?redirect=%2Fmy",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "x-riskdevicesign": "8e8d63c9b2d6a1ecb1cde7ea8fca4d8d"
}
cookies = {
    "Hm_lvt_4b4ce93f1c92033213556e55cb65769f": "1710754990",
    "Hm_lpvt_4b4ce93f1c92033213556e55cb65769f": "1710754990",
    "sid1": "1710754992380-4676D0F42A20D0822AF313DDF18EF73A",
    "sid2": "1710754992380-4676D0F42A20D0822AF313DDF18EF73A",
    "pvid": "1"
}
url = "https://m.ctyun.cn/account/login"
params = {
    "referrer": "wap",
    "mainVersion": "300031500",
    "comParam_curTime": str(int(time.time()*1000)),
    "comParam_seqCode": seq_code,
    "comParam_signature": signature,
    "isCheck": "true",
    "locale": "zh-cn"
}
data = {
    "userName": uname,
    "password": encrypt_pwd
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
print(response.text)
