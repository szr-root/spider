https://m.ctyun.cn/wap/main/auth/login?redirect=%2Fmy

学习使用，发现参数链接有两个js数据。密码加密。






seqcode  ：
    r = Object(u["k"])()
    这个比较好做，32位随机字符，0-9，A-Z

signature：
    i()(n + r + i()(r + t + n));
    这个值,看起来像是md5加密的，尝试加密了一下数据，真是md5的




payload的参数比较好找，密码略微复杂

    chatgpt看了TripleDES，直接用python就干出来了。。
    硬扣js也行，