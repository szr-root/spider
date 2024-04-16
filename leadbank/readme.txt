1. 通过访问"https://www.leadbank.com.cn/login/"，
    1.1获取cookie，cookie中含有__RequestVerificationToken值,还有一个服务器时间
        __RequestVerificationToken = session.cookies.get("__RequestVerificationToken")
        server_time = response.headers.get('Ali-Swift-Global-Savetime')

    1.2页面elment中，也含有一个token值，这个值才是最后登录的参数。
        可以通过xpath进行提取数据
        tree = etree.HTML(response.text)
        params_token = tree.xpath('//form[@id="loginForm"]/input/@value')[0]

2.获取验证码,通过图鉴平台，下载图片，进行读取

3. 数据组装，发起请求
    3.1 密码很简单，只是简单的base64加密