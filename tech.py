# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/22
# @File : tech.py
import requests
from lxml import etree

# response.xpath('//div[contains(@class,"main-news-area")]/div[@style]/a')
headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
                 '(KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Accept-Language':'zh-CN,zh;q=0.9'
}
res = requests.get('https://www.163.com/tech/article/HTMAA02R000999C0.html',headers=headers)

res.encoding = 'utf8'
# print(res.text)
# with open('detail.html','w+') as f:
#     f.write(res.text)
selector = etree.HTML(res.text)
post_main = selector.xpath('//div[@class="post_main"]')
for i in post_main:
    content_list = i.xpath('./div[@class="post_content"]/div[@class="post_body"]//p/text()')
    print(content_list)
    print(''.join(content_list))