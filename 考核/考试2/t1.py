import base64
import hashlib
import time

# url  = base64.b64decode('aHR0cHM6Ly9nZ3p5ZncuZmouZ292LmNuL2luZGV4L25ldy8=').decode()
# path = base64.b64decode('aHR0cHM6Ly9nZ3p5ZncuZmouZ292LmNuL0Z3UG9ydGFsQXBpL0FydGljbGUvUGFnZUxpc3Q=').decode()
# print(url,path)


from Crypto.Util.Padding import unpad
from Crypto.Cipher import AES



timestamp = str(int(time.time()*1000))



def get_sign(e):
    kv_list = []
    for key, value in e.items():
        if value == '':
            continue
        kv = f'{key}{value}'
        kv_list.append(kv)
    key = 'B3978D054A72A7002063637CCDF6B2E5' + ''.join(sorted(kv_list,key=str.lower))
    md5 = hashlib.md5(key.encode('utf-8')).hexdigest()
    # md5 = hashlib.md5(p_str.encode()).hexdigest()
    return md5


# sign = get_sign(p_str)
# print(sign)
import requests
import json


cookies = {
    "ASP.NET_SessionId": "rpepxklofvfyuetikqsdp0to"
}
url = "https://ggzyfw.fj.gov.cn/FwPortalApi/Trade/TradeInfo"
data = {
    "pageNo": 3,
    "pageSize": 20,
    "total": 3664,
    "AREACODE": "",
    "M_PROJECT_TYPE": "",
    "KIND": "GCJS",
    "GGTYPE": "1",
    "PROTYPE": "",
    "timeType": "6",
    "BeginTime": "2023-11-12 00:00:00",
    "EndTime": "2024-05-12 23:59:59",
    "createTime": [],
    "ts": timestamp
}

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://ggzyfw.fj.gov.cn",
    "Referer": "https://ggzyfw.fj.gov.cn/business/list",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "portal-sign": get_sign(data),
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)


def aes_de(b64_data):
    key = b'EB444973714E4A40876CE66BE45D5930'
    iv = b'B5A8904209931867'
    cipher = AES.new(key, AES.MODE_CBC, iv)
    data = base64.b64decode(b64_data)
    de_data = cipher.decrypt(data)
    return unpad(de_data, 16).decode('utf-8')

plain_text = aes_de(response.json()['Data'])
print(plain_text)