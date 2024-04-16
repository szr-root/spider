# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/29
# @File : enpassword.py


import base64
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.hashes import SHA256
from cryptography.hazmat.primitives.asymmetric import rsa


public_key_string = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLCvPQVj1dYDdtb34bUGrxAYHLDMQdsjbk7+pY/ugKdHKhxQo1E43gt4HMgjFuirvaGfh1NJ2FCX9thillLZlHhkNOUcEQSbpcJycQ9wq7FBtOk7lE0dBBA9t3Zk/qBx2A2xPVvVNf9lNdNDDp2vXhQ549H9hg1s1TPHFEags3QIDAQAB'
public_key_string = '-----BEGIN PUBLIC KEY-----\n' + public_key_string + '\n-----END PUBLIC KEY-----'

# 加载公钥
public_key = serialization.load_pem_public_key(public_key_string.encode(), backend=default_backend())


def en_password(password):
    # 需要加密的数据
    data_to_encrypt = password.encode()

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
    return encrypted_data_base64_encoded
    # print(encrypted_data_base64_encoded,'\n',len(encrypted_data_base64_encoded))
