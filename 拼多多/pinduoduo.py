# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/16
# @File : pinduoduo.py
import execjs,requests

with open('pinduoduo.js') as f:
    jscode = f.read()

JS = execjs.compile(jscode)
key = JS.call('fn')
print(key)


headers = {
    "authority": "mobile.pinduoduo.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://mobile.pinduoduo.com/?page_id=10002_1696919649100_2ygywexbgg&is_back=1&bsch_is_search_mall=&bsch_show_active_page=",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
}

url = "https://mobile.pinduoduo.com/proxy/api/api/alexa/cells/hub/v3"
params = {
    "pdduid": "0",
    "is_back": "1",
    "platform": "H5",
    "page_sn": "10002",
    "page_id": "index_list.html",
    "engine_version": "3.0",
    "offset": "40",
    "count": "20",
    "list_id": "v04pxh24am",
    "anti_content": key
}
response = requests.get(url, headers=headers, params=params)

print(response.json())
# print(response)