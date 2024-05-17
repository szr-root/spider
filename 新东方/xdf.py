# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/11
# @File : xdf.py

import requests
import execjs


with open('xdf.js','r') as f:
    js_code = f.read()

JS = execjs.compile(js_code)


data = {
    "pageIndex": 4,
    "pageSize": 12,
    "keyword": "%E8%8B%B1%E8%AF%AD",
    "order": "0"
}

res = JS.call('ve',data)
params = res.get('params')
sign = res.get('sign')


headers = {
    "authority": "dsapi.xdf.cn",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "origin": "https://souke.xdf.cn",
    "referer": "https://souke.xdf.cn/search?cityCode=510100&kw=%E8%8B%B1%E8%AF%AD",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sign": sign,
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
url = "https://dsapi.xdf.cn/product/v2/class/search"
# params = {
#     "appId": "5053",
#     "cityCode": "510100",
#     "t": "1715417538014",
#     "pageIndex": "2",
#     "pageSize": "12",
#     "keyword": "英语",
#     "order": "0"
# }

response = requests.get(url, headers=headers, params=params)

print(response.text)
# print(response)