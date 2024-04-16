# 3. web端
# pip install websockets
import websockets
import asyncio


async def main():
    # python这边链接是为了什么? 为了让ws调用js. 完成加密
    # Python连接websocket服务器的逻辑
    async with websockets.connect("ws://127.0.0.1:8888/invoke.ws?name=yihao") as ws:
        await ws.send("我是Python客户端！")  # 发送数据过去
        print("连接成功了")
        val = await ws.recv()
        print("capture_token::::", val)


if __name__ == '__main__':
    asyncio.run(main())
