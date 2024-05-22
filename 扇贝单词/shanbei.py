# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/21
# @File : shanbei.py
import requests
import execjs



headers = {
    "authority": "apiv3.shanbay.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "origin": "https://web.shanbay.com",
    "referer": "https://web.shanbay.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "x-csrftoken": "405549b4749598c66e4330efc231f710"
}
cookies = {
    "csrftoken": "405549b4749598c66e4330efc231f710",
    "sajssdk_2015_cross_new_user": "1",
    "_ga": "GA1.2.1463993939.1716282166",
    "_gat": "1",
    "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzM0MDY3NjUsImV4cCI6MTcxNzE0NjUzMywiZXhwX3YyIjoxNzE3MTQ2NTMzLCJkZXZpY2UiOiIiLCJ1c2VybmFtZSI6IndlY2hhdF96cWhoYnFveSIsImlzX3N0YWZmIjowLCJzZXNzaW9uX2lkIjoiMGMwY2MyMjYxNzUxMTFlZmE2YWIzZTI4ZTNlZGY4YjQifQ.XLcFZLR0RRSAs8JdbOhDNBaUSf_nRS0mFH-65XfAPMk",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22qlylgd%22%2C%22first_id%22%3A%2218f9a63894636b-08abcdd3ec982a-16525634-1296000-18f9a638947ad3%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%A4%BE%E4%BA%A4%E7%BD%91%E7%AB%99%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fopen.weixin.qq.com%2F%22%7D%2C%22%24device_id%22%3A%2218f9a63894636b-08abcdd3ec982a-16525634-1296000-18f9a638947ad3%22%7D",
    "tfstk": "fX9xLONwL0EvqIlMhnGk7fYUCKmoxKK2wE-QINb01ULJAenN1ZvGBCL9Wofsutv9yHTPjdb0nRCOPN7botfGXN_kAmowSmr2aexQnKcVIRBVQOgn-vD30nWNCkZA-0UqFMsxIi_fCouudv0n-vDo5LM2k2AM7qrdwG75ci_150B5jM6_1NT1P_sCxr61CFtS2Gs_CSs_h315xGTyqbQaGw29EWR8MpktqR2MeggNRne8IgpADs_Bc3peKLeNMwtfyRghBIbCPMpS7rbwe39fbUMuHOK5XeBXw4wvWnOe7MTjersvGHKhwduQBgRWu_jvwcN5lH_fhapZbR7Xih9G6KgQjZ92oLCeQr3lSBxkh_LIr8LN6IOChd3KFg7WKpd7_ybdjSi-25PNGgjhOa96rwz-HgQnqiVa__hP2wm-R5PNGgSR-0VL_55-a"
}
url = "https://apiv3.shanbay.com/wordsapp/user_material_books/zdfen/learning/words/unlearned_items"
params = {
    "ipp": "10",
    "page": "2"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
res = response.json()['data']
# print(res,type(res))

decrypt_data = execjs.compile(open('./shanbei.js').read()).call('get_words',res)
# print(decrypt_data)
new_dict = {}
for item in decrypt_data:
    word = item['vocab_with_senses']['word']
    translate = item['vocab_with_senses']['senses'][0]['definition_cn']
    new_dict[word] = translate

print(new_dict)
# print(response.json()['data'])
