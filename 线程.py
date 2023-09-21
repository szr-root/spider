# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/19
# @File : 线程.py

import threading
import time

start = time.time()

def foo(i):
    print(f'f{i}开始,时间{time.time()}')
    time.sleep(i)
    print(f'f{i}结束')


task_list= []
for i in range(1, 11):
    task = threading.Thread(target=foo, args=(i,))
    task.start()
    task_list.append(task)

for i in task_list:
    i.join()

time = time.time()- start
print(f'耗时：{time}')
