# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/19
# @File : 协程2.py
import time

import aiohttp
import asyncio

tasks = []

async def get_data():
    async with aiohttp.ClientSession() as session:
        async with session.get("http://httpbin.org/headers") as response:
            print(await response.text())

async def main():
    for i in range(1,11):
        tasks.append(get_data())

    await asyncio.wait(tasks)


if __name__ == '__main__':
    start = time.time()
    asyncio.run(main())
    print(time.time() - start) # 0.6900942325592041

#
# import requests
#
#
# def get_data():
#     for i in range(1, 11):
#         r = requests.get("http://httpbin.org/headers")
#         print(r.text)
#
#
# if __name__ == '__main__':
#     start = time.time()
#     get_data()
#     print(time.time() - start) # 6.5078349113464355
