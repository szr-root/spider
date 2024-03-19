# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/02/28
# @File : 浏览器接管.py

from playwright.sync_api import sync_playwright
from lxml import etree

def switch_to_page(context, page_title):
    for page in context.pages:
        if page_title == page.title():
            print(page_title)
            page.bring_to_front()
            return page


with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp('http://localhost:8899/')
    # 获取page对象
    context = browser.new_context()


    page = browser.contexts[0].pages[0]

    # ret = page.evaluate('window.navigator.webdriver')
    # print(ret)

    # 该操作会直接作用在接管的浏览器中
    # page.locator('//*[@id="q"]').press_sequentially('mac pro', delay=300)
    #
    # page.locator('//*[@id="J_TSearchForm"]/div[1]/button').click()

    page.wait_for_timeout(1000)

    print(browser.contexts[0].pages)

    select_page = browser.contexts[0].pages[1]
    # select_page = page

    print(select_page.title())
    print(select_page.url)
    # print(select_page.content())

    content = select_page.content()
    tree = etree.HTML(content)
    div_list = tree.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/div[2]/div[3]/div/div')
    print(len(div_list))

    for div in div_list:
        name = div.xpath(".//a/div/div[1]/div[2]/div/span/text()")
        price = div.xpath("//a//div/div[1]/")
        print(name,)

        # //*[@id="root"]/div/div[2]/div[1]/div[1]/div[2]/div[3]/div/div[1]/a/div/div[1]/div[2]/div/span
        # //*[@id="root"]/div/div[2]/div[1]/div[1]/div[2]/div[3]/div/div[2]/a/div/div[1]/div[2]/div/span