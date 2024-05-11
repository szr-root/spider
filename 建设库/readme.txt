地址：
    https://www.jiansheku.com/search/enterprise/

级别：
     入门级别

用到方法：
    扣Js代码，md5加密sign值


步骤：
 1。通过\bSign\b找生成值的地方。
 2。排除掉Math.sign，很快就找到了加密的地方
 e.headers.sign = (param = e.data,
            time = f,
            t = Cu(param),
            Su("ghaepVf6IhcHmgnk4NCTXLApxQkBcvh1", Su("mwMlWOdyM7OXbjzQPulT1ndRZIAjShDB", Su("ZuSj0gwgsKXP4fTEz55oAG2q2p1SVGKK", t, time), time), time)),

 3。去挨着扣js代码。
 e.data = 请求的参数
 f是时间戳。
 Cu是函数 ---》一路扣，没有遇到问题
 Su  找到  -- 》 Mu（），是个调度器。可以在这里使用单步调试。进入代码实现逻辑。最后发现是md5加密

 使用crypto-js模块 的md5摘要，直接得到结果
