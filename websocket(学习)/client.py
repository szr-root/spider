
# 3. web端
# pip install websockets
import websockets
import asyncio


async def main():

    async with websockets.connect("ws://127.0.0.1:8888/python") as ws:
        await ws.send("我是Python客户端！")  # 发送数据过去
        print("连接成功了")
        ret = await ws.recv()
        print(ret)

if __name__ == '__main__':
    asyncio.run(main())
