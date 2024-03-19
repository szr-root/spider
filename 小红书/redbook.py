# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/26
# @File : redbook.py

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
    "x-b3-traceid": "588612b443ab9c78",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjA3ZjY2NDlmNGY3ZmUxMTEzM2I1YTgxYTI3MWJiOGEwY2FmMTIzNTMwZDk3MDdkYjVkYjU0ZmY3N2FkYzMwODM3OGRmYjM5ZGQxYmI2NDA5MzJjNjIzMWNkMmYwZjE2ZWM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNWEzMjZhMmYyNmM1YTk5MjE1NzFmNDU0ZDhiNmI1MTgzMWQ0ZjQ4MTFkNzFiNzQyZjUyNTgwY2JhNTE0M2JkYTdiNWZiNmRjYWRkMzhhYTBhMjIzZmFiM2QwZDUwMGZiZmYxOTUwODJiMWNmOGE0ZTI5ZjA4YTdlNjQ5YWVkNGU2M2NhMDRhNzZiYzQ3YzM4MDlkZTJmNWIyYTBlNmJmNzY4ZjU4NmUxMTlkMGM1OTNhOTY4ZmViMTRhOWU1YTNkNyJ9",
    "x-s-common": "2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0P1+jhhHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0c1PahAHjIj2eLjwjHlweW7Gnpf8nQ0+0Q6q/+0ye+12gQxPnDA+gQV+dp0q/bEPo+38dWU2/PIPeZIP0HE+/LFHjIj2eGjw0r7PeGU+/q9weGhP/WVHdW7H0ijnbSgg9pEadkYp9zMp/+y4LSxJ9Swprpk/r+t2fbg8opnaBl7nS+Q+DS187YQyg4knpYs4M+gLnSOyLiFGLY+4B+o/gzDPS8kanS7ynPUJBEjJbkVG9EwqBHU+BSOyLShanS7yn+oz0pjzASinD+Q+DSxc/+yySDU/DzVJLEon/+yJpph/pzb2DFUa/b8pB4hnpzQPFMgafSOzFp7n/QBJLMLagkwprM7nDz3PFMr8BT8yS83nnkpPbkTn/+wPD83ngk+4FRr//+OzMQTnnk++pkoLgY8JLDU/Dzm+LMCafkwyDSC/p4wyFMTng4yyDLUnS4++pkL/fSyJpQi/p4yybSLzfl8yfT7nDz0PbSgzgk+pFDl/D4+PFMT/fT+zMrA/D4ByrMCzfSwpbQx/dktySkozfkwzBqMnnkVyMSLyBkypb8V/DziJLEozfM8yflin/QyyDFUpfY+ySkTnSzsyLMxn/Q8pbkk/D4wyDFU/fSwpFpC/nkyyrMTngSwJLFlnpz3+LMxz/bw2D8T/DzpPbkryBSwJLDl/pzd2DMgL/myySrF/pzByFECzfSw2SbEnfkp2LEL8748PDki/SzbPrFUafT8pBzk/S4yyLETLfk8pMQ3/gkiybSLcfY+yDSCnfMByLFULg4yzbp7/L4yypkTngYOpbp7/FztyLMg/fMOzFLInSzQ+pkxc/z8pBzV/fkz+pSgpfTwzMLU//QwyrMrLfYw2SkkngkzPMSC//z+zBl3nSztJLEgagS8prQV/fMtJLECn/zyySLF/fMp2rMLJBT+zFFl/MzwyrRLn/zyJp8k/pzayrRgp/b8prE3/dStwaHVHdWhH0ija/PhqDYD87+xJ7mdag8Sq9zn494QcUT6aLpPJLQy+nLApd4G/B4BprShLA+jqg4bqD8S8gYDPBp3Jf+m2DMBnnEl4BYQyrkSL98+zrTM4bQQPFTAnnRUpFYc4r4UGSGILeSg8DSkN9pgGA8SngbF2pbmqbmQPA4Sy9MaPpbPtApQy/8A8BE68p+fqpSHqg4VPdbF+LQfqLkQ4D8j/DlztMkc4A4Q2BzA2op7q0zl4BTQy7Q7anD6q9TyGA+QcFlDa/+O8/mM4BIUcLzyqFIM8Lz/ad+/Lo4GaLp9q9Sn4rkOLoqhcdp78SmI8BpLzb4OagWFpDSk4/8yLo4jadbFPrShaoS6/LbSpdpFpFS94d+npdz1anD3aFSb2fbSJA8APeSoPnLI+g+84gzFqfQ68/mBzS4IwLTSPbSl/FSh8nprLo4TaLp68n8l4rbCnS8n/7+M4FDA8BpL4gzmNMS98/G72D4Qyb+IaLpLwrEdzM4QP9lEwrS88FSbyrSs4g4/aL+ipjV6a9pDqepSP7bF4LDA+d+xG/4APB8H+rS3+npkqfFMa7b78DSka7+LJ78SPp+NqA+c4MmT8LRS8ob7pDDA+rlYp/8SL7b7y7mf/d+rLo4Sa/+VNFDAqe+U4g4wN7p7wBuIG9EE/nRAyd+Oq9Tn4o+Qy94S8bpmqM8/pfTQyLbAydH9qA+sy/4Qy9RSPgbFnLS3p04cLo4O/S8FPLDA/9LlqgzfanTtqM8l49SQznRA8opF+gzM494Apd4VaL+kcFShzBEoJDSrPSkS8nSl4bpQyrYNanSO8pSM4MbyGDplJ0ZIq9kSab+QzpSNLb87Lg+M4BbQyFkSpSm7zrTg87+3naRS+fQi/jHVHdWEH0iM+0chP0Plw/rVHdWlPsHCP0bR",
    "x-t": "1706257686818"
}
cookies = {
    "a1": "1887aefebc62oq3ch3nyrj1i35rl6ucq1y0skfx2y30000229554",
    "webId": "02686e560d185e3f0549b8c3aa9739f8",
    "gid": "yYYW0didf8y4yYYW0didDviCSKJlAqSxqIvF8JvVy3q2FMq81K7SAT888JJj22480f2qj4qf",
    "gid.sign": "oToyklRLz2l41k1hhhm90KbW4cg=",
    "abRequestId": "02686e560d185e3f0549b8c3aa9739f8",
    "web_session": "030037a34ac10837b810e4af50224adf4fe15c",
    "webBuild": "4.1.3",
    "xsecappid": "xhs-pc-web",
    "websectiga": "10f9a40ba454a07755a08f27ef8194c53637eba4551cf9751c009d9afb564467",
    "sec_poison_id": "ad32b54a-6a60-474a-9519-fbad144e4241",
    "unread": "{%22ub%22:%22659b60d8000000000f031ee0%22%2C%22ue%22:%2265a89b37000000002a011a65%22%2C%22uc%22:25}"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
data = {
    "cursor_score": "",
    "num": 35,
    "refresh_type": 1,
    "note_index": 31,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.career_v3",
    "search_key": "",
    "need_num": 10,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ]
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(len(response.json()['data']['items']))