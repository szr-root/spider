# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/19
# @File : lagou.py
import json

import requests
import execjs

with open('./lagou.js') as f:
    jscode = f.read()

JS = execjs.compile(jscode)
body = "first=true&needAddtionalResult=false&city=%E5%85%A8%E5%9B%BD&pn=1&labelWords=sug&fromSearch=true&suginput=%E6%B5%8B%E8%AF%95&kd=%E6%B5%8B%E8%AF%95%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88",
X_S = JS.call('get_X_S_Header',body)
print(X_S)

headers = {
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Origin": "https://www.lagou.com",
    "Referer": "https://www.lagou.com/wn/jobs?pn=1&labelWords=sug&fromSearch=true&suginput=%E6%B5%8B%E8%AF%95&kd=%E6%B5%8B%E8%AF%95%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88&city=%E6%88%90%E9%83%BD",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "X-K-HEADER": "tOsVgaDQ7Tynzf6ZvcDSch2Sj8w6i/vViIpS0lNPwx3MEMWDfYQlqkPERe4VW1zs",
    "X-S-HEADER": X_S,
    "X-SS-REQ-HEADER": "{\"secret\":\"tOsVgaDQ7Tynzf6ZvcDSch2Sj8w6i/vViIpS0lNPwx3MEMWDfYQlqkPERe4VW1zs\"}",
    "accept": "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "traceparent": "00-23f2a1312150ac29fc2fb2e8c1b90f7d-dc066a84a6e668b1-01",
    "x-anit-forge-code": "35480028-30bd-4ff2-9a2b-6be8fc4ca621",
    "x-anit-forge-token": "6443de35-2f63-4b9d-8259-578746747dd3"
}
cookies = {
    "user_trace_token": "20240119143853-1672e075-ff56-4880-b0cf-4eb2e473e31b",
    "Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6": "1705646335",
    "_ga": "GA1.2.469750703.1705646335",
    "LGUID": "20240119143855-93b6bff1-c158-4a5c-99d3-6359faa18a5a",
    "_gid": "GA1.2.605373908.1705646346",
    "gate_login_token": "v1####7fea2bc657c9af97ac255f33021eedc2ebd692996b8def2fb90de29bd248242e",
    "LG_LOGIN_USER_ID": "v1####3bf4dfcebe6199de7a59d62f34f5dc9459c4af50388d6a550d8d26f6f2aaaf75",
    "LG_HAS_LOGIN": "1",
    "_putrc": "1EB95053E8F30179123F89F2B170EADC",
    "JSESSIONID": "ABAAAECAAEBABII4A864297DC39D6EF69318A137DA42012",
    "login": "true",
    "unick": "%E5%AE%8B%E5%85%86%E7%91%9E",
    "showExpriedIndex": "1",
    "showExpriedCompanyHome": "1",
    "showExpriedMyPublish": "1",
    "hasDeliver": "290",
    "privacyPolicyPopup": "false",
    "index_location_city": "%E6%88%90%E9%83%BD",
    "WEBTJ-ID": "01192024%2C144015-18d2072ddb3d83-0310c43f4e55c6-16525634-2073600-18d2072ddb41cb9",
    "RECOMMEND_TIP": "true",
    "__SAFETY_CLOSE_TIME__17795700": "1",
    "Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6": "1705646417",
    "_ga_DDLTLJDLHH": "GS1.2.1705646348.1.1.1705646417.60.0.0",
    "LGRID": "20240119144017-4adc9fb2-687c-4228-a028-e2cea05fcc9b",
    "sajssdk_2015_cross_new_user": "1",
    "sensorsdata2015session": "%7B%7D",
    "__lg_stoken__": "2cebf324be7110f2446fb1bac035076c5a72c12dc601536e86429db9d8eb189b48e396b21562737899a96ae02dbb8e5e7aebe09e5c28e02c2f307981196897a532162f7eae5f",
    "X_MIDDLE_TOKEN": "a04c96613227c7e88f33aa63460d6cea",
    "X_HTTP_TOKEN": "7cf4fa7a2222dbb309664650713c6a539e5e1361c1",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2217795700%22%2C%22first_id%22%3A%2218d2072e6c15d2-0b485bbd3f5f2e-16525634-2073600-18d2072e6c2174e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24os%22%3A%22MacOS%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A%22119.0.0.0%22%7D%2C%22%24device_id%22%3A%2218d2072e6c15d2-0b485bbd3f5f2e-16525634-2073600-18d2072e6c2174e%22%7D"
}
url = "https://www.lagou.com/jobs/v2/positionAjax.json"
_body = '{"first":"true","needAddtionalResult":"false","city":"成都","pn":"2","labelWords":"sug","fromSearch":"true","suginput":"测试","kd":"测试开发工程师"}'
data = {
    "data":JS.call('get_body',_body)
}
# print(data)
response = requests.post(url, headers=headers, cookies=cookies, data=data)
res = response.json().get('data')

de_res = JS.call('get_decrypt_res',res)
# print(de_res)

# print(response)
result = de_res.get('content').get('positionResult').get('result')
print(result)