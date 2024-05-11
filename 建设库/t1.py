# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/10
# @File : t1.py

import requests
import json
import execjs

with open('t1.js','r') as f:
    jscode = f.read()

JS = execjs.compile(jscode)





cookies = {
    "Hm_lvt_03b8714a30a2e110b8a13db120eb6774": "1715321743",
    "Hm_lpvt_03b8714a30a2e110b8a13db120eb6774": "1715321743",
    "HWWAFSESTIME": "1715321738888",
    "HWWAFSESID": "2d3aea33936684f808"
}
url = "https://capi.jiansheku.com/nationzj/enterprice/page"
data = {
    "eid": "",
    "achievementQueryType": "and",
    "achievementQueryDto": [],
    "personnelQueryDto": {
        "queryType": "and"
    },
    "aptitudeQueryDto": {
        "queryType": "and",
        "nameStr": "",
        "aptitudeQueryType": "and",
        "businessScopeQueryType": "or",
        "filePlaceType": "1",
        "aptitudeDtoList": [
            {
                "codeStr": "",
                "queryType": "and",
                "aptitudeType": "qualification"
            }
        ],
        "aptitudeSource": "new"
    },
    "page": {
        "page": 3,
        "limit": 30,
        "field": "",
        "order": ""
    }
}

res = JS.call('get_sign',data)

headers = {
    "authority": "capi.jiansheku.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "devicetype": "PC",
    "origin": "https://www.jiansheku.com",
    "page": "search-enterprise",
    "referer": "https://www.jiansheku.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sign": res[0],
    "timestamp": str(res[1]),
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
data = json.dumps(data, separators=(',', ':'))


print(res)
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
# print(response)