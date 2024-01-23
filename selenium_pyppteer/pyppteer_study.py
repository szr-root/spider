# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/11/08
# @File : pyppteer_study.py

import asyncio
from pyppeteer import launch
from lxml import etree


width, height = 1366, 768

async def main():
    # 创建浏览器对象，展示界面，取消顶部的自动化提示
    bro = await launch(headless=False,args=['--disable-infobars'])

    # 打开一个新页面
    page = await bro.newPage()

    await page.setViewport({'width': width, 'height': height})
    await page.goto('http://quotes.toscrape.com/js/')
    page_text = await page.content()
    tree = etree.HTML(page_text)
    div_list = tree.xpath('//div[@class="quote"]')
    print(len(div_list))

    await asyncio.sleep(50)

    # await bro.close()


if __name__ == "__main__":
    c = main()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(c)
