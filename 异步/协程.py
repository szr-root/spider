# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/11/01
# @File : 协程.py

import asyncio
import time

start = time.time()

# 创建特殊函数
async def get_pic(url):
    print(url)
    await asyncio.sleep(2)
    # print(url)
    return url


urls = ['1111','222','3333']

# 创建协程对象
# c = get_pic('1111')
# # 创建任务对象
# task = asyncio.create_task(c)
# task = asyncio.ensure_future(c)
def parse(t):
    u = t.result()
    print('http://' + u + '.com')


tasks = []
for url in urls:
    c = get_pic(url)
    # task = asyncio.create_task(c)
    task = asyncio.ensure_future(c)
    # 给任务对象绑定回调函数用于数据解析
    task.add_done_callback(parse)
    tasks.append(task)



# 创建事件循环对象
loop = asyncio.get_event_loop()

# 把任务对象，加到循环对象启动
loop.run_until_complete(asyncio.wait(tasks))

print('total time: ',time.time()-start)