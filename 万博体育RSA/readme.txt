https://cn.fawmx.com/home/register

这个例子分3步骤

1、通过链接https://cn.fawmx.com/service/vpkey 访问，获取 modulus 和 exponent 的值
    不需要额外参数，直接访问

2、通过链接https://cn.fawmx.com/ee/loginverification 访问 ，获取response ，作为之后的fkey
    这里需要先访问网页，还需要点击密码登录。弹出密码输入框，获取网页中隐藏的数据<input type="hidden" name="eeBlackBox" id="eeBlackBox" value="xxx">
    获取这个value值，当做参数eeblackbox
    本来想直接从页面获取，发现不行，是jS生成的。
    后面发现直接复制这个值也能访问，就没做逆向了。

3、通过访问链接 https://cn.fawmx.com/kz/member/loginAdvance?r=0.7002236957324981 ，模拟登陆
    登录的pwd加密，通过js逆向得出，fkey，则是第二步链接获取的response值。r是随机值

