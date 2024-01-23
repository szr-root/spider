# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/16
# @File : btc.py

# https://mytokencap.com/
# webpack


import requests
import execjs

with open('btc.js','r') as f:
    js_code = f.read()

js_compile = execjs.compile(js_code)

code,time = js_compile.call('get_code')
print(code,time)
headers = {
    "authority": "api.mytokenapi.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    "origin": "https://mytokencap.com",
    "pragma": "no-cache",
    "referer": "https://mytokencap.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
url = "https://api.mytokenapi.com/ticker/index"
params = {
    "language": "en_US",
    "timestamp": time,
    "code": code,
    "platform": "web_pc",
    "v": "0.1.0",
    "legal_currency": "USD",
    "international": "1"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)