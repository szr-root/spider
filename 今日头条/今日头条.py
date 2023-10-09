# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/09
# @File : 今日头条.py

# print(len('_02B4Z6wo00f01WagcnAAAIDCmV-Nj29m5-VmgnbAADyPc19Nom6MV6eJpFId90kNvMNWkqFNoHvggohOCLtKGVdZndPimFcjfjGM3PWvP7NSbGiWD.N.tc6uE4J0UuDx5lJZh0MPHvi-lNKd6c'))
import requests
import execjs

url = '/hot-event/hot-board/?origin=toutiao_pc'

# 1.获取signature
def get_signature():
    with open('VM完整功能.js') as f:
        JS_code = f.read()

    js = execjs.compile(JS_code)
    signature = js.call('fn',url)
    return signature

# 2.准备请求头，参数等，并发起请求
target_url = 'https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc&_signature='
signature = get_signature()
real_url = target_url + str(signature)

headers = {
    'Referer':'https://www.toutiao.com/',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
}

ret = requests.get(real_url,headers=headers)
print(ret,ret.json())

