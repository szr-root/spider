# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/29
# @File : 已知rsa的公钥.py
# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/28
# @File : yiban.py


import base64
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.hashes import SHA256
from cryptography.hazmat.primitives.asymmetric import rsa

# 假设你有一个RSA公钥字符串
public_key_string = """-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+jRodXHXsRaMwECGmExsLbhcD
RKLT64P4CpYevdpijkU9Lxc4jhlk64DK+dB4ihyYGrP/voLzdKTWR/1ks6zq7+3Z
Rd5i6KF97JWoyrVaX4N0xmWjR4ClsnR9PQC7cmnX4TFooADxSd/3D4MdCLOBNj4B
9hZ7tAfh6zLeuEovjQIDAQAB
-----END PUBLIC KEY-----
"""

# 加载公钥
public_key = serialization.load_pem_public_key(public_key_string.encode(), backend=default_backend())

# 需要加密的数据
data_to_encrypt = b"123456"

# 使用OAEP进行加密
encrypted_data = public_key.encrypt(
    data_to_encrypt,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=SHA256()),
        algorithm=SHA256(),
        label=None
    )
)

# 加密后的数据是二进制格式，可以进行base64编码或者其他方式转为文本
encrypted_data_base64_encoded = base64.b64encode(encrypted_data).decode()

print(encrypted_data_base64_encoded,'\n',len(encrypted_data_base64_encoded))
