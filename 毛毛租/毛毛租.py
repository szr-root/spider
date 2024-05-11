# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/16
# @File : 毛毛租.py
import base64
import time

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json; charset=UTF-8",
    "Origin": "https://www.maomaozu.com",
    "Referer": "https://www.maomaozu.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "PHPSESSID": "3biqjl227e9qqtlldkhppa3k3m",
    "SECKEY_ABVK": "MTXZn7yKO6ZKO+bMpkmjw1fQK/5XaG42RwsMtYlqXkZJ1DwEKh8FLHCSs2n4FNFxiH22Lfj+JNHYSpGgfFPzng%3D%3D",
    "Hm_lvt_6cd598ca665714ffcd8aca3aafc5e0dc": "1710575268",
    "Hm_lpvt_6cd598ca665714ffcd8aca3aafc5e0dc": "1710575268",
    "BMAP_SECKEY": "MTXZn7yKO6ZKO-bMpkmjw1fQK_5XaG42RwsMtYlqXkZovUG_UKvbY2amM2Q1IKCT8qF6fFhc6EA9yFTvTIaMs422tJnjifz1PSG_3Xm-oJb7D4uRsGoaFcBvsMbSCLM0FDLFauyoYzb2953upS5IfUZfzqpPfkaSSnVr5zJariNhA7I0uenIAEa0eCFaKF9SzTkoY8GetVeYBWiyXZ8CcA"
}
url = "https://www.maomaozu.com/index/build.json"

# data = 'i1gpLEJyKvluv3sQVGr/hxonYuLBNkfnjalJYxYt5rRuafygq7gwxZDGJMDzVhqx'

timestamp = int(time.time() * 1000) + 1000 * 60 * 60

data = '{"Type":0,"page":3,"expire":%d}' % timestamp

data = pad(data.encode(), 16)
key = b'55b3b62613aef1a0'
iv = b'55b3b62613aef1a0'

AES_obj = AES.new(key=key, mode=AES.MODE_CBC, iv=iv)
encrypt_data = AES_obj.encrypt(data)
print('data:::', encrypt_data)

encrypt_data_b64 = base64.b64encode(encrypt_data).decode()
print(encrypt_data_b64)

response = requests.post(url, headers=headers, cookies=cookies, data=encrypt_data_b64)

print(response.text)

key2 = b'0a1fea31626b3b55'
iv2 = b'0a1fea31626b3b55'

aes = AES.new(key=key2, mode=AES.MODE_CBC, iv=iv2)

encrypt_data_b64 = response.text
encrypt_data = base64.b64decode(encrypt_data_b64)

# encrypt_data = pad(encrypt_data,16)
res_data = aes.decrypt(encrypt_data)
print(res_data.decode())
