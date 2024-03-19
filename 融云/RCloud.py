# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/01/26
# @File : RCloud.py


import requests



def get_rcloud_num():
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Referer": "https://developer.rongcloud.cn/app/user/rTzipN6UCOzrRGIqurruvQ?userId=",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\""
    }
    cookies = {
        "_ga": "GA1.2.1989639690.1681787635",
        "_pykey_": "89df4342-f884-5155-9c9c-646ba6c20dc7",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22214979%22%2C%22first_id%22%3A%22187925abef7649-024f8104b4a3c8a-1d525634-2073600-187925abef8d9e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg3OTI1YWJlZjc2NDktMDI0ZjgxMDRiNGEzYzhhLTFkNTI1NjM0LTIwNzM2MDAtMTg3OTI1YWJlZjhkOWUiLCIkaWRlbnRpdHlfbG9naW5faWQiOiIyMTQ5NzkifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22214979%22%7D%2C%22%24device_id%22%3A%22187925abef7649-024f8104b4a3c8a-1d525634-2073600-187925abef8d9e%22%7D",
        "im-token-login": "1",
        "_c_WBKFRo": "F6GZNnykvf99oYmt5N0ymGCTWhhB62mJAoQOCOTe",
        "PHPSESSID": "g46ncsc4h9i4pvat794rh8nfps",
        "_ga_KFWF7QVWX7": "GS1.2.1704373110.21.1.1704373204.0.0.0",
        "SECKEY_ABVK": "n13TiWq5f4avpJzoehwdpqJrqIHJTTaQ89CsUFWR7So%3D",
        "BMAP_SECKEY": "n13TiWq5f4avpJzoehwdpif6vG-QjVa877lW_LZd7ENQakTbs99wedCDumcGLxT3nqgurcr0Pprh_5HHbu4ic9s5M29exH2GluqgQpMkcNolUH8_jE9wPtP3TzyfYuw72Z5FGUJ3V-Tb6hVFIyY48OU4bAR9rGNyEEuPPT065eSupAan4sIXnKqAF8yLpQwr",
        "userId": "z%D2%D8P%D0%B7%CC%BF%FB%7C%FCh%BB%C6%13%1B",
        "bdid": "nHaJ05SAU4JLJsXGCvubxA%3D%3D",
        "Hm_lvt_6c40173c3f3182c1f56945e4afa2948a": "1704200163,1706252354",
        "_clck": "1ek6znx%7C2%7Cfiq%7C0%7C1462",
        "Hm_lpvt_6c40173c3f3182c1f56945e4afa2948a": "1706252501",
        "im-token-rand": "WZfXYdILD8HNPKTX0PDZsv7YijmcVM2heoLqBoQGHco%3D%40184e.cn.rongnav.com%3B184e.cn.rongcfg.com",
        "cstoken": "WZfXYdILD8HNPKTX0PDZsv7YijmcVM2heoLqBoQGHco=@184e.cn.rongnav.com"
    }
    url = "https://developer.rongcloud.cn/app/devUserList"
    params = {
        "offset": "300",
        "num": "0",
        "userId": ""
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    r_num =len( response.json().get('data'))
    return r_num




if __name__ == "__main__":
    r_num = get_rcloud_num()
    print(f"融云现在注册用户为 {r_num} 个")


