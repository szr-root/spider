# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/20
# @File : rsa.py
import base64
import execjs


name = '17782746521'
pwd = '123456'

with open('rsa_encrypt.js') as f:
    jscode = f.read()

js = execjs.compile(jscode)

uname = js.call('encrypt_data',name)
password = js.call('encrypt_data',pwd)


import websockets
import asyncio


async def main():
    # python这边链接是为了什么? 为了让ws调用js. 完成加密
    # Python连接websocket服务器的逻辑
    async with websockets.connect("ws://127.0.0.1:8888/invoke.ws?name=yihao") as ws:
        await ws.send("我是Python客户端！")  # 发送数据过去
        # print("连接成功了")
        val = await ws.recv()
        # print("capture_token::::", val)
        return val


val = asyncio.run(main())
print(uname,'\n',password,'\n',val)


# with open('完整功能.js') as f:
#     jscode = f.read()
#
# js = execjs.compile(jscode)
#
# key = js.call('fn')
# print(key)


