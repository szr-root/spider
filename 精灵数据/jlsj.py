# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/21
# @File : jlsj.py
import base64
import json

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

headers = {
    "authority": "vapi.jinglingshuju.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://www.jinglingshuju.com",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
url = "https://vapi.jinglingshuju.com/Data/getNewsList"
data = {
    "page": "5",
    "num": "20",
    "uid": "undefined"
}
response = requests.post(url, headers=headers, data=data)

res = response.json()
b64_res = base64.b64decode(res['data'])

aes = AES.new(key=b'DXZWdxUZ5jgsUFPF', mode=AES.MODE_ECB)
text = aes.decrypt(b64_res)
text = unpad(text,AES.block_size).decode('utf-8')
# print(text)
data = json.loads(text)
print(data)
