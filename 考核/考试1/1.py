import base64

url = base64.b64decode('aHR0cHM6Ly93d3cuYmFpeXVuYWlycG9ydC5jb20vZmxpZ2h0L2RlcA==').decode()

path = base64.b64decode('aHR0cHM6Ly93d3cuYmFpeXVuYWlycG9ydC5jb20vZmxpZ2h0L2RlcA==').decode()

print(url, path)


import requests
import json
import execjs

with open('./t2.js') as f:
    jscode = f.read()

JS = execjs.compile(jscode)



cookies = {
    "Hm_lpvt_0effb2f651854e064f7d24a159e08bd5": "1715568343",
    "Hm_lpvt_38ddcda5baa19a6a899f6f3f7471381a": "1715568343",
    "Hm_lpvt_483eff6efca2ca9bff48af354895a36f": "1715568343",
    "Hm_lpvt_783519365e6df848bd882229527a15bc": "1715568343",
    "Hm_lpvt_e9e5e5ffd5a25d3f4d7e1466807ef7b7": "1715568343",
    "Hm_lvt_0effb2f651854e064f7d24a159e08bd5": "1715566782",
    "Hm_lvt_38ddcda5baa19a6a899f6f3f7471381a": "1715566782",
    "Hm_lvt_483eff6efca2ca9bff48af354895a36f": "1715566782",
    "Hm_lvt_783519365e6df848bd882229527a15bc": "1715566782",
    "Hm_lvt_e9e5e5ffd5a25d3f4d7e1466807ef7b7": "1715566782",
    "JSESSIONID": "PucCE7q26OUifzfigW8OUwHK-GAx2DeS-hsXOmKI"
}
url = "https://www.baiyunairport.com/byairport-flight/flight/list"
data = {
    "type": "1",
    "terminal": "",
    "day": 0,
    "depOrArr": "1",
    "pageNum": 1,
    "pageSize": 15
}


data = json.dumps(data, separators=(',', ':'))
print(data)
signature = JS.call('getSHA256withRSA',str(data))
print(signature)


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Nonce": str(signature[2]),
    "Origin": "https://www.baiyunairport.com",
    "Referer": "https://www.baiyunairport.com/flight/dep",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Signature": signature[0],
    "Timestamp": str(signature[1]),
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "locale": "zh_CN",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)