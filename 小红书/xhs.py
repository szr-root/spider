# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/20
# @File : xhs.py

import requests
import json


headers = {
    "authority": "edith.xiaohongshu.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "referer": "https://www.xiaohongshu.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "x-b3-traceid": "7393922358bca4c7",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6ImE2NGM3OGJjNDhlY2MxNjU5OWM1MGYwYjNjNmU0MjllZjFkZDQxZjY2OTA5ZTU4N2I5OWU0N2RlNTQ4YmMwNjZkYWFlMGNhNTVmOGVkODMyYzE5ZWEzYmIyZDBmMTljNmM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNWEzMjZhMmYyNmM1YTk5MjE1NzFmNDU0ZDhiNmI1MTgzMWQ0ZjQ4MTFkNzFiNzQyZjUyNTgwY2JhNTE0M2JkYTdiNWZiNmRjYWRkMzhhYTBhMjIzZmFiM2QwZDUwMGZiZmYxOTUwODJiMWNmOGE0ZTI5ZjA4YTdlNjQ5YWVkNGU2M2NhMDRhNzZiYzQ3YzM4MDFiZTYwMTczOTY4YTVkYzRiOWViZGUxMWM5NzVmOWE5NzY3ZGNiZmY0ZjI1OTdkOCJ9",
    "x-s-common": "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",
    "x-t": "1716174043189"
}
cookies = {
    "a1": "1887aefebc62oq3ch3nyrj1i35rl6ucq1y0skfx2y30000229554",
    "webId": "02686e560d185e3f0549b8c3aa9739f8",
    "gid": "yYYW0didf8y4yYYW0didDviCSKJlAqSxqIvF8JvVy3q2FMq81K7SAT888JJj22480f2qj4qf",
    "gid.sign": "oToyklRLz2l41k1hhhm90KbW4cg=",
    "abRequestId": "02686e560d185e3f0549b8c3aa9739f8",
    "web_session": "030037a34ac10837b810e4af50224adf4fe15c",
    "xsecappid": "xhs-pc-web",
    "webBuild": "4.16.0",
    "acw_tc": "0de228894dc59637083e1db63552593449eaed48d35aa1556a35ae3d9555d334",
    "websectiga": "634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a",
    "sec_poison_id": "5fb7b8da-6969-4858-b798-cb29bcb6a96f",
    "unread": "{%22ub%22:%2266312c76000000001e038b7f%22%2C%22ue%22:%22662b1c2600000000040181c1%22%2C%22uc%22:25}"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
data = {
    "cursor_score": "",
    "num": 31,
    "refresh_type": 1,
    "note_index": 35,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.fashion_v3",
    "search_key": "",
    "need_num": 6,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": False
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)