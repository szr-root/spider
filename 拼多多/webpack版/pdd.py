# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/23
# @File : pdd.py

# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/16
# @File : pinduoduo.py
import execjs,requests

with open('./pdd.js') as f:
    jscode = f.read()

JS = execjs.compile(jscode)
key = JS.call('get_anti_content')
print(key)


headers = {
    "Accept": "application/json, text/javascript",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Origin": "https://www.pinduoduo.com",
    "Referer": "https://www.pinduoduo.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
url = "https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info"
params = {
    "tf_id": "TFRQ0v00000Y_14282",
    "page": "1",
    "size": "100",
    # "anti_content": "0aqAfx5eMwCElPRPW_f7AGXYacX0sFEfmL2L2FOgou2i0i8ZWmCh1v03VRPrhvTrQNs14uxkXb0yvXbY9R4L9UmHOu9i6W8IfOCAZfr6Rn6glX1dqW5N7i9xMRMbSyns3UEB15GYKGKnhDkAq4LVrMvN_8PXEB3-FgWZ0BwA_15DqlTEkBzdvf_dBq-HjiA7I37UfM7d1KQw6HfRDSLBWM3IW1fIEM-fe7L0BoRFqVYkl4WYRgVDzxVkMwKEzgg1PycYTJnuTJn0dacGd8XYma0BVaZJSyyR3jEMv-exG8aKcTJoqKYfquwJjpQTg60nYg3XLNUoY50zOgYHqTjwagKKl9WH24VEBCTD8CkDLL1bsVTUfXkS1HUSvMZD81OHMuO1I0Vrw6ZLLl5UfleSkHCS1ImSkR1bfxw26tmKkB-SCgPtCTS1ZdzedtjnBVgsGCM3eULsyEd1-WMsdwg3Kpge3MLzpHM31ZEjbd6v7Ur1ywbRocruw4cmKPtKE2tptHd7q0VSB8kSfKDM1z7S3-cUA3dgf4d7htEDMhrUSgDELFfrDu2sxC9flqi65R-f8yF"
    'anti_content':key,
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
# print(response)