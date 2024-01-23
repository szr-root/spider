# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/17
# @File : 财联社(webpack).py

# https://www.cls.cn/telegraph

import requests


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=utf-8",
    "Pragma": "no-cache",
    "Referer": "https://www.cls.cn/telegraph",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "HWWAFSESID": "846041035b3eba7c993",
    "HWWAFSESTIME": "1705461363127",
    "Hm_lvt_fa5455bb5e9f0f260c32a1d45603ba3e": "1705461365",
    "hasTelegraphRemind": "on",
    "hasTelegraphSound": "on",
    "vipNotificationState": "on",
    "isMinimize": "off",
    "hasTelegraphNotification": "off",
    "Hm_lpvt_fa5455bb5e9f0f260c32a1d45603ba3e": "1705461502"
}
url = "https://www.cls.cn/v1/roll/get_roll_list"
params = {
    "app": "CailianpressWeb",
    "category": "announcement",
    "last_time": "1705461506",
    "os": "web",
    "refresh_type": "1",
    "rn": "20",
    "sv": "7.7.5",
    "sign": "5001ac414c863e785f7c1742af36d949"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)