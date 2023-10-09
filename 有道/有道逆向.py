# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/29
# @File : 有道逆向.py
import base64
from hashlib import md5
import time
import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import json

Session = requests.session()
url = "https://dict.youdao.com/webtranslate"
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Referer': 'https://fanyi.youdao.com/',
    'Cookie': 'OUTFOX_SEARCH_USER_ID_NCOO=1787595223.8283408; OUTFOX_SEARCH_USER_ID=-98906678@221.182.16.82',
    'Content-Type': 'application/x-www-form-urlencoded'
}

# 解析sign值
mysticTime = str(int(time.time() * 1000))
s = f'client=fanyideskweb&mysticTime={mysticTime}&product=webfanyi&key=fsdsogkndfokasodnaso'
m = md5()
m.update(s.encode())
sign = m.hexdigest()

word = input('word:::')
# word = 'apple'

data = {
    'i': word,
    'from': 'auto',
    'to': '',
    'dictResult': 'true',
    'keyid': 'webfanyi',
    'sign': sign,
    'client': 'fanyideskweb',
    'product': 'webfanyi',
    'appVersion': '1.0.0',
    'vendor': 'web',
    'pointParam': 'client,mysticTime,product',
    'mysticTime': mysticTime,
    'keyfrom': 'fanyi.web',
    'mid': '1',
    'screen': '1',
    'model': '1',
    'network': 'wifi',
    'abtest': '0',
    'yduuid': 'abcdefg'
}
res = Session.post(url=url, headers=headers, data=data)
ret = res.text
# print(ret)


# 2.得到请求，解密结果
# ret = 'Z21kD9ZK1ke6ugku2ccWu-MeDWh3z252xRTQv-wZ6jddVo3tJLe7gIXz4PyxGl73nSfLAADyElSjjvrYdCvEP4pfohVVEX1DxoI0yhm36ytQNvu-WLU94qULZQ72aml6JKK7ArS9fJXAcsG7ufBIE0gd6fbnhFcsGmdXspZe-8whVFbRB_8Fc9JlMHh8DDXnskDhGfEscN_rfi-A-AHB3F9Vets82vIYpkGNaJOft_JA-m5cGEjo-UNRDDpkTz_NIAvo5PbATpkh7PSna2tHcE6Hou9GBtPLB67vjScwplB96-zqZKXJJEzU5HGF0oPDY_weAkXArzXyGLBPXFCnn_IWJDkGD4vqBQQAh2n52f48GD_cb-PSCT_8b-ESsKUI9NJa11XsdaUZxAc8TzrYnXwdcQbtl_kZGKhS6_rCtuNEBouA_lvM2CbS7TTtV2U4zVmJKpp-c6nt3yZePK3Av01GWn1pH_3sZbaPEx8DUjSbdp4i4iK-Mj4p2HPoph67DR7B9MFETYku_28SgP9xsKRRvFH4aHBHESWX4FDbwaU='
##2.1 魔改base64修改(方式一)
# ret = ret.replace('-', '+').replace('_', '/')
# print(ret)

# (方式二)
## 2.2 base64 解码
ret = base64.b64decode(ret.encode(), altchars='-_'.encode())
print(ret)

##2.3 aes解密
### 2.3.1 构建CBC算法的  key，iv
key_str = 'ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl'
iv_str = 'ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4'


def get_md5_digest(val):
    obj = md5()
    obj.update(val.encode())
    return obj.digest()


k_v = list(map(get_md5_digest, [key_str, iv_str]))

key = k_v[0]
iv = k_v[1]

# print(key,iv)

### 2.3.2 构建CBC解密
aes = AES.new(key=key, mode=AES.MODE_CBC, iv=iv)
decrpt_data = unpad(aes.decrypt(ret), 16)
re_data = json.loads(decrpt_data.decode())
tr_Data = re_data.get('translateResult')[0][0].get('tgt')
print(tr_Data)
