# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/19
# @File : 协程.py


import asyncio, time

async def work(i, n):  # 使用async关键字定义异步函数
    print('任务{}等待: {}秒'.format(i, n))
    await asyncio.sleep(n)  # 休眠一段时间
    print('任务{}在{}秒后返回结束运行'.format(i, n))
    return i + n


tasks = []
async def main():
    global tasks
    tasks = [asyncio.create_task(work(1, 1)),
             asyncio.create_task(work(2, 2)),
             asyncio.create_task(work(3, 3))]

    await asyncio.wait(tasks) # 阻塞


start_time = time.time()  # 开始时间
asyncio.run(main())
print('运行时间: ', time.time() - start_time)
for task in tasks:
    print('任务执行结果: ', task.result())

