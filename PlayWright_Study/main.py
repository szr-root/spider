from playwright.sync_api import sync_playwright
from lxml import etree
import pandas as pd
from pandas import Series, DataFrame


def switch_to_page(context, page_title):
    for page in context.pages:
        if page_title == page.title():
            print(page_title)
            page.bring_to_front()
            return page


with sync_playwright() as p:
    # bro = p.chromium.launch(headless=False, slow_mo=1000)
    bro = p.chromium.launch(slow_mo=1000)

    context = bro.new_context()
    page = context.new_page()

    page.wait_for_timeout(2000)

    page.goto('https://www.bilibili.com/')
    page.locator('input.nav-search-input').press_sequentially('Python', delay=500)
    page.locator('.nav-search-btn').click()

    # pages = context.pages
    # for sub_page in pages:
    #     title = sub_page.title()
    #     content = sub_page.content()
    #     print(title)

    select_page = switch_to_page(context, 'Python-哔哩哔哩_Bilibili')

    select_page.wait_for_timeout(2000)
    page_text = select_page.content()
    # print(page_text)
    # with open('./content.html', 'w+', encoding='utf-8') as f:
    #     f.write(page_text)
    select_page.wait_for_timeout(1000)
    tree = etree.HTML(page_text)
    # tree = etree.parse(page_text,etree.HTMLParser())
    # print(tree)
    select_page.wait_for_timeout(1000)
    # div_list = tree.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div/div[3]/div/div")
    div_list = tree.xpath('//*[@id="i_cecream"]/div/div[2]/div[2]/div/div/div/div[3]/div/div')
    print(len(div_list))
    df = pd.DataFrame(columns=['名称', '作者', '时间'])
    print(df)
    for div in div_list:
        title = div.xpath('.//a/h3/@title')[0]
        author = div.xpath('.//a/span[1]/text()')[0]
        time = div.xpath('.//a/span[2]/text()')[0]
        data = (title, author, time)
        # print(data,'\n')
        # df = df._append(pd.Series(data), ignore_index=True)
        df = df._append({'名称': title, '作者': author, '时间': time}, ignore_index=True)

    page.close()
    bro.close()

    df.to_excel('data.xlsx')
    print(df)
