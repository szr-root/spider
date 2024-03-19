# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/16
# @File : 丁香园.py

import requests
import random



headers = {
    "authority": "www.dxy.cn",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json;charset=utf-8",
    "referer": "https://www.dxy.cn/bbs/newweb/pc/case/search?keyword=%E6%96%B0%E5%86%A0",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
cookies = {
    "dxy_da_cookie-id": "931a3e9f8de7b591ec13d5a2c2da99801710583561026",
    "_ga": "GA1.1.1932176658.1710583561",
    "Hm_lvt_5fee00bcc4c092fe5331cc51446d8be2": "1710583561",
    "Hm_lvt_8a6dad3652ee53a288a11ca184581908": "1710583572",
    "Hm_lpvt_8a6dad3652ee53a288a11ca184581908": "1710583572",
    "route": "e88493cb267514d6ff523b5c350f1657",
    "cms_token": "2f390b23-78ce-4f58-8c01-901ecb78a3dd",
    "JUTE_SESSION_ID": "70608c2e-3a65-4088-b646-0627bf9a1e25",
    "Hm_lpvt_5fee00bcc4c092fe5331cc51446d8be2": "1710583583",
    "ifVisitOldVerBBS": "false",
    "_ga_LTBPLJJK75": "GS1.1.1710583561.1.1.1710583590.0.0.0"
}
url = "https://www.dxy.cn/bbs/newweb/case-bank/page-post-info"



noncestr = str(random.randint(10000000,99999999))

params = {
    "keyword": "新冠",
    "sectionCode": "0",
    "pageSize": "20",
    "pageNum": "2",
    "serverTimestamp": "1710583583364",
    "timestamp": "1710583597943",
    "noncestr": noncestr,
    "sign": "b4cae0beeb2932834ea0c333f1aedc230275b330"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)