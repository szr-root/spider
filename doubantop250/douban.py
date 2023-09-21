# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/13
# @File : douban.py

import requests, re

url = 'https://movie.douban.com/top250?format=text'

headers = {
    'Referer': 'https://www.baidu.com/link?url=6LEbnKz8ku-h13ZuPFVsmb2UwkJMP95MuqsGsZrF0FdOIgTdWu4NdcPNbi2SixyIfPo0KjYtmLEhLX0kFI1Pb_&wd=&eqid=a0578397000af9510000000365015fec',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}

r = requests.get(url, headers=headers)
# print(r.text)

name_list = re.findall(r'<li>.*?class="item">.*?class="hd">.*?class="title">(.*?)</span>.*?class="rating_num".*?(\d\.\d)+</span>', r.text, re.S)
print(name_list)
