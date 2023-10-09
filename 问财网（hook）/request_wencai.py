# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/03
# @File : request_wencai.py

import execjs

with open('get_k.js') as f:
    JScode = f.read()

JS = execjs.compile(JScode)

hexinV = JS.call('goal.get_data')
print(hexinV)
# .....
# 本节主要在分析构建cookie的v值，使用hook函数比较方便。
pass