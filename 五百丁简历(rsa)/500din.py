# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/29
# @File : 500din.py
import requests
import time
import execjs

session = requests.Session()
now = str(int(time.time()))
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Referer": "https://www.500d.me/login/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
# cookies = {
#     "token": "3e106661-bb8a-4f7e-900d-a0659772e12b",
#     "SESSION": "a0c2ef38-c13c-4864-b026-94bec66b868b",
#     "Hm_lvt_3e432021fa3cef1b8b58965a002fd8c9": now,
#     "Hm_lpvt_3e432021fa3cef1b8b58965a002fd8c9": now,
#     "Hm_lvt_e3536a6a3ab44f13b238e19790090eb5": now,
#     "Hm_lpvt_e3536a6a3ab44f13b238e19790090eb5": now,
#     "Hm_lvt_f2a5f48af9d935f4001ca4c8850ce7c0": now,
#     "Hm_lpvt_f2a5f48af9d935f4001ca4c8850ce7c0": now,
#     "_ga": f"GA1.2.989512275.{now}",
#     "_gid": f"GA1.2.1825791285.{now}",
#     "_gat": "1",
#     "_ga_HMEHEV80BM": f"GS1.2.{now}.1.0.{now}.0.0.0"
# }

def get_key(phone_num):

    url = "https://www.500d.me/common/public_key/"
    params = {
        "_": str(phone_num)
    }
    response = session.get(url=url, headers=headers, params=params).json()
    print(response)
    # print(session.cookies.get('token'))
    return response


def get_en_password(phone_num,password):
    key = get_key(str(phone_num))
    modulus = key.get('modulus')
    exponent = key.get('exponent')

    with open('./500din.js') as f:
        js_code = f.read()

    JS = execjs.compile(js_code)

    password = password
    en_password = JS.call('en_password',password,modulus,exponent)
    print(en_password)
    return en_password


def login(phone_num,password):


    url = "https://www.500d.me/login/submit/"
    data = {
        "username": str(phone_num),
        "enPassword": get_en_password(str(phone_num),password),
        "service": "",
        "remember": "true"
    }
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://www.500d.me",
        "Referer": "https://www.500d.me/login/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "token": session.cookies.get('token')
    }
    print(session.cookies.get('token'))
    # 这里的header多了一个token值，是从cookie里获取的值
    response = session.post(url=url, headers=headers, data=data)
    print(response.text)


if __name__ == "__main__":
    login('17786476231','123456')


