# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/11/01
# @File : 异步网络请求.py

# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/13
# @File : douban.py
import asyncio
import time, os

import aiohttp
import requests
from lxml import etree




def get_pic_list():
    url = 'https://movie.douban.com/top250?format=text'
    headers = {
        'Referer': 'https://www.baidu.com/link?url=6LEbnKz8ku-h13ZuPFVsmb2UwkJMP95MuqsGsZrF0FdOIgTdWu4NdcPNbi2SixyIfPo0KjYtmLEhLX0kFI1Pb_&wd=&eqid=a0578397000af9510000000365015fec',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }
    r = requests.get(url, headers=headers, verify=False)
    tree = etree.HTML(r.text)
    img = tree.xpath('//ol[@class="grid_view"]/li//img')
    # print(img)
    new_dict = {}
    for item in img:
        name = item.xpath('./@alt')[0]
        list = item.xpath('./@src')[0]
        new_dict[name] = list
    return new_dict


# print(get_pic_list())
async def download_pic(name, url):
    tag = url.split('.')[-1]
    print(name,url)
    headers = {
        'Referer': 'https://movie.douban.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }
    async with aiohttp.ClientSession() as sess:
        async with sess.get(url=url, headers=headers, ssl=False) as response:
            # data = await response.content.read()
            with open(f'pics/{name}.{tag}', 'wb') as f:
                print(f'下载图片:{name}.{tag}')
                f.write(await response.content.read())


if __name__ == '__main__':
    start = time.time()
    if 'pics' not in os.listdir():
        os.mkdir('pics')

    n_u = get_pic_list()
    # print(n_u.items())
    tasks = []
    for key, val in n_u.items():
        # 创建协程对象
        t = download_pic(key, val)
        # 创建任务对象
        task = asyncio.ensure_future(t)
        tasks.append(task)

    # 创建事件循环对象
    loop = asyncio.get_event_loop()

    # 将事件添加到循环对象启动
    loop.run_until_complete(asyncio.wait(tasks))

    print('\ntotal time:', time.time() - start)
