# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/11
# @File : qimingpian.py

import requests
import execjs

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://www.qmpsee.com",
    "Referer": "https://www.qmpsee.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
url = "https://wyiosapi.qimingpian.cn/Activity/recommendActivityWeb"
data = {
    "page": "1",
    "num": "20"
}
response = requests.post(url, headers=headers, data=data)

# print(response.text)

with open('qimingpian.js','r') as f:
    js_code = f.read()

JS = execjs.compile(js_code)

res = JS.call('decrypt_data',response.json()['encrypt_data'])
print(res)