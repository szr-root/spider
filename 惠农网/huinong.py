# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/22
# @File : huinong.py
# -*- coding: utf-8 -*-
import requests
import json
import execjs

head = execjs.compile(open('huinong.js').read()).call('get_head')

headers = {
    "authority": "appapi.cnhnb.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://m.cnhnb.com",
    "pragma": "no-cache",
    "referer": "https://m.cnhnb.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
   }

headers.update(head)
# print(headers)

url = "https://appapi.cnhnb.com/recq/api/transform/supply/v501/index"
data = {
    "pageNumber": 2,
    "pageSize": 8,
    "ad_ch": 1
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)
print(response.text)