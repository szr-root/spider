(function () {
    // 浏览器逻辑:
    let ws = new WebSocket("ws://127.0.0.1:8888/browser");

    // 有人传输数据过来的时候自动执行的函数
    ws.onmessage = function (msg) {

        console.log("msg:::", msg.data);
    }
})();
