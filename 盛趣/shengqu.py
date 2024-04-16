# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/29
# @File : shengqu.py

import requests
from enpassword import en_password
import time


headers = {
    "authority": "w.cas.sdo.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "referer": "https://login.u.sdo.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
cookies = {
    "CASCID": "CID7EE675B0F262496E9FC8BC8A41F78C7C",
    "SECURE_CASCID": "CID7EE675B0F262496E9FC8BC8A41F78C7C"
}
url = "https://w.cas.sdo.com/authen/staticLogin.jsonp"

password = '123456'
encrypt_password = en_password(password)
print(encrypt_password)


now = int(time.time() * 1000)

params = {
    "callback": "staticLogin_JSONPMethod",
    "inputUserId": "17762534621",
    "password": encrypt_password,
    "appId": "201",
    "areaId": "0",
    "serviceUrl": "https://www.sdo.com/",
    "productVersion": "v5",
    "frameType": "3",
    "locale": "zh_CN",
    "version": "21",
    "tag": "20",
    "authenSource": "2",
    "productId": "2",
    "scene": "login",
    "usage": "aliCode",
    "isEncrypt": "1",
    "autoLoginFlag": "0",
    "_": now
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)