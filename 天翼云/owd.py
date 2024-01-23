# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/17
# @File : owd.py

import execjs

with open('pwd.js') as f:
    Jscode = f.read()

js = execjs.compile(Jscode)

uname = '1722334563@163.com'
pwd = '123456'

password = js.call('fn', pwd, uname)
print(password)
