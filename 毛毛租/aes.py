# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/16
# @File : aes.py

from Crypto.Cipher import AES
import base64
from Crypto.Util.Padding import pad, unpad

key = b'55b3b62613aef1a0'
iv = b'55b3b62613aef1a0'

b64_encrypt_data = 'i1gpLEJyKvluv3sQVGr/h3l8T8X5q97vcwLva0xYgbViW8XLpkVyORoaQjr9aVqn'
encrypt_data = base64.b64decode(b64_encrypt_data)

aes = AES.new(key=key, mode=AES.MODE_CBC, iv=iv)
data = unpad(aes.decrypt(encrypt_data), 16)

print(data)
