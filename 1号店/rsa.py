# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/20
# @File : rsa.py
import base64
import execjs

name = '17782746521'
pwd = '123456'

with open('rsa_encrypt.js') as f:
    jscode = f.read()

js = execjs.compile(jscode)

uname = js.call('encrypt_data',name)
password = js.call('encrypt_data',pwd)


# with open('完整功能.js') as f:
#     jscode = f.read()
#
# js = execjs.compile(jscode)
#
# key = js.call('fn')
# print(key)


