# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/29
# @File : leedbank.py
import requests
from urllib import request
from tujian import getImgCodeText
import base64
from lxml import etree

# 1、通过访问"https://www.leadbank.com.cn/login/"，获取cookie，cookie中含有__RequestVerificationToken值,页面elment中，也含有一个token值，
# 这个值才是最后登录的参数。
session = requests.Session()

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
url = "https://www.leadbank.com.cn/login/"
response = session.get(url=url, headers=headers, verify=False)

__RequestVerificationToken = session.cookies.get("__RequestVerificationToken")

server_time = response.headers.get('Ali-Swift-Global-Savetime')

tree = etree.HTML(response.text)
params_token = tree.xpath('//form[@id="loginForm"]/input/@value')[0]



# 2、获取验证码
url = f"https://www.leadbank.com.cn/Common/GenerateFindMyPasswordCaptcha?random={server_time}"+"000"
res = session.get(url,verify=False)
with open('./code.png','wb+') as f:
    f.write(res.content)

# 通过图鉴获取验证码
code = getImgCodeText('./code.png',3)
print(code)

# 3、数据组装，发起请求
password = "123456"

url = "https://www.leadbank.com.cn/customer/AjaxLogin"
headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.leadbank.com.cn",
    "Referer": "https://www.leadbank.com.cn/login/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}

data = {
    "userName": "17764728732",
    "password": base64.b64encode(password.encode()),
    "mark": "encry",
    "rememberMe": "false",
    "returnUrl": "",
    "validcode": code,
    "random": str(server_time)+"000",
    "__RequestVerificationToken": params_token
}
response = session.post(url, headers=headers, data=data,verify=False)

print(response.text)
