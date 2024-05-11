# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/10
# @File : test.py

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
import base64


def rsa_oaep_encrypt(public_key_pem, plaintext):
    # 将PEM格式的公钥解析为 cryptography 的公钥对象
    public_key = serialization.load_pem_public_key(public_key_pem, backend=default_backend())

    # 使用 SHA-256 作为消息摘要算法
    # 使用 SHA-1 作为MGF1（Mask Generation Function）的哈希算法
    ciphertext = public_key.encrypt(
        plaintext.encode('utf-8'),
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA1()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )

    # 返回 Base64 编码的密文
    return base64.b64encode(ciphertext).decode('utf-8')


# 公钥
public_key_pem = b"""
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsy4xppPDUT2eAOR5h0cyydzxtKB9O80A
GjUT6FmDgg6CwelpnE0C2h2JQyP1gCveJs6GDwSDn20RVVpD67f//YPYErjaH/CBOxNG3k5IkW1o
Qx04uqFNMtWvjzk0aFh2eJLsBi7Ha4elw3WySg00B8oZCL4VBay4ML9kyOAjjCj5jHCX8a2yxIMJ
IF+EjW3kBR68IMwBvuDL45Qa0oB24vTffaSEs+hGjMTQvoCciOfti3pmEAlVc438/cBgAhK5cIMf
IMElxYAVvmsDy0I7RCUTrajetKjX94Q+JuQUxnIHNC3IVtYsl1x0lNRtb93IhlRCkZ9djOu350eq
hZIOXQIDAQAB
-----END PUBLIC KEY-----
"""

# 待加密的明文
plaintext = "123456"

# 加密
encrypted_text = rsa_oaep_encrypt(public_key_pem, plaintext)
print("Encrypted text:", encrypted_text)
