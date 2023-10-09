# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/01
# @File : bird.py
import base64

import requests
import execjs
import json
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad

with open('bird.js') as f:
    JsCode = f.read()

JS = execjs.compile(JsCode)

page = '2'
data_dic = {"limit": "20", "page": page}

s = json.dumps(data_dic, separators=(',', ':'))
# s = '{"limit":"20","page":"2"}'
# s = json.dumps('page=2&limit=20')
# print(s)
res = JS.call('get_header', s)
# print(res)
# print(type(res), res)
time = str(res[0])
uuid = res[1]
info = res[2]
# info = '{"limit":"20","page":"2"}'
data = res[3]

# new_str = info + uuid + time
# md5_obj = hashlib.md5()
# md5_obj.update(new_str.encode())
# sign = md5_obj.hexdigest()
# print(sign)
sign = res[4]

url = 'https://api.birdreport.cn/front/activity/search'
headers = {
    # 'Referer': 'http://birdreport.cn/',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Requestid': uuid,
    'Timestamp': time,
    'Sign': sign
}

ret = requests.post(url=url, headers=headers, data=data)
ret.encoding = 'utf8'
print(ret, ret.json())

encrypt_data = ret.json().get('data')
encrypt_data = base64.b64decode(encrypt_data)
print(encrypt_data)
# decrypt_data = JS.call('f.prototype.decode',encrypt_data)
# print(decrypt_data)


# 使用python进行解密
# this.url = 'www.birdreport.cn';
key = '3583ec0257e2f4c8195eec7410ff1619'
iv = 'd93c0d5ec6352f20'

# encrypt_data = pad(encrypt_data, AES.block_size)
asec_obj = AES.new(key=key.encode('utf8'), mode=AES.MODE_CBC, iv=iv.encode('utf8'))

decrypt_data = asec_obj.decrypt(encrypt_data)
decrypt_data = unpad(decrypt_data, AES.block_size)
print(decrypt_data)
print(decrypt_data.decode('utf8'))
