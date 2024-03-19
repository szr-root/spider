# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/16
# @File : test.py

import base64

# 获取url
url = base64.b64decode('aHR0cHM6Ly93d3cuemhpcGluLmNvbS93ZWIvZ2Vlay9qb2I/cXVlcnk9SmF2YSZjaXR5PTEwMTAxMDEwMCZwYWdlPTI=')
print(url.decode())

# 构建框架
import requests
import execjs
#
# headers = {
#     "authority": "www.zhipin.com",
#     "accept": "application/json, text/plain, */*",
#     "accept-language": "zh-CN,zh;q=0.9",
#     "referer": "https://www.zhipin.com/web/geek/job?query=Java&city=101010100&page=2",
#     "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-platform": "\"macOS\"",
#     "sec-fetch-dest": "empty",
#     "sec-fetch-mode": "cors",
#     "sec-fetch-site": "same-origin",
#     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
#     "x-requested-with": "XMLHttpRequest"
# }
# cookies = {
#     "wd_guid": "e00e2282-7a96-4b89-ac38-6e16600ae244",
#     "historyState": "state",
#     "__g": "-",
#     "_bl_uid": "byl10tpsujp2skgsLwOa227ezpmb",
#     "Hm_lvt_194df3105ad7148dcf2b98a91b5e727a": "1710592267",
#     "Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a": "1710592267",
#     "__zp_stoken__": "5f92fNjTDo8K5VMK1QTATEREEE0ImOTQvZj42KDc2QjY0QTRANjQ5FjYmwpLDgTzCqcOSYMOOEzkrNEFBOTZCQTY8GzQ1wrg5Ny7Cm8K2Q8Kmw5BVw4kKDQdTKMOwwrYqwp7Ctgo2wrQtJMSCwrk7PkE2wrXCtsKew4JjwrTCm8K1XMK7wrTDgD45Mi4xQgcIVGBCOUVIVgxLYUlcVk8EUFJHKzZCNUExw7bDuS9DDxAPDQgMEwwOCwcIBxAFEA8QEgcHCAcFEC45wqLCu8SgSsWrxbLElsWsw5DCscSaw6rDmcKHw5LDq8OYwqPEvMO4w5XCvMOyw4PEpsKzxLnCu8O%2FwqLFgMKtw63CpsOEwrLDt8Kow6rCmsO3wqXClMKdw5rCnMKOwqnDscKkwq7CscKWwp%2FDrMKhwr%2FCrMKLwpnCoUtJwq3CqEbCjcK2wobDgMKlwqZZS2LCqcK%2BwrHCr1pdwqhnwrvDgF5IVcK1wrfCtlZhenITVQR4XhA3YsOOU8OE",
#     "__c": "1710592266",
#     "__l": "l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3DJava%26city%3D101010100%26page%3D2&r=&g=&s=3&friend_source=0&s=3&friend_source=0",
#     "__a": "57612901.1710592266..1710592266.3.1.3.3"
# }
# url = "https://www.zhipin.com/wapi/zpgeek/search/joblist.json"
# params = {
#     "scene": "1",
#     "query": "Java",
#     "city": "101010100",
#     "experience": "",
#     "payType": "",
#     "partTime": "",
#     "degree": "",
#     "industry": "",
#     "scale": "",
#     "stage": "",
#     "position": "",
#     "jobType": "",
#     "salary": "",
#     "multiBusinessDistrict": "",
#     "multiSubway": "",
#     "page": "2",
#     "pageSize": "30"
# }
# response = requests.get(url, headers=headers, cookies=cookies, params=params)
#
# print(response.text)
# print(response.cookies.get('__zp_sseed__'))


with open('完整.js','r') as f:
   js_code = f.read()

JS = execjs.compile(js_code)
res = JS.call('fn')
print(res)