# 中间商....
# pip install websockets
import websockets
import asyncio


async def handle(ws_client, path):
    # 解析path
    print("path::", path)
    await ws_client.send("hello, i am websocket server!")


async def main():
    # 启动websocket服务区
    async with websockets.serve(handle, "127.0.0.1", 8888) as ws_server:
        print("你成功的启动了一个websocket")
        await asyncio.Future()  # 永远停在这里.


if __name__ == '__main__':
    asyncio.run(main())
