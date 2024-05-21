# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/20
# @File : czw.py
import base64

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

headers = {
    "authority": "interface.bidcenter.com.cn",
    "accept": "text/plain, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://search.bidcenter.com.cn",
    "referer": "https://search.bidcenter.com.cn/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
url = "https://interface.bidcenter.com.cn/search/GetSearchProHandler.ashx"
data = {
    "from": "6137",
    "guid": "a6666b9a-43bc-46ec-a859-c2af0425676c",
    "location": "6138",
    "token": "",
    "next_token": "",
    "keywords": "%E5%8C%BB%E9%99%A2",
    "mod": "0",
    "page": "4"
}
response = requests.post(url, headers=headers, data=data)

# print(response.text)

aes = AES.new(key=b'3zKzyf6eEfuDjAG3', mode=AES.MODE_CBC, iv=b'fyUANZ0qSNZhhNCV')
encrypt = base64.b64decode(response.text)
# print(encrypt)
res = aes.decrypt(encrypt)
print(res)
# res = unpad(res, )
# res = unpad(res,block_size=4)
print(res.decode())
