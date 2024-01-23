# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/18
# @File : login.py
import json
import requests
import execjs

with open('pwd.js', 'r') as f:
    jscode = f.read()

JS = execjs.compile(jscode)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Referer': 'https://cn.fawmx.com/home/register',
}


def vpkey():
    url = 'https://cn.fawmx.com/service/vpkey'
    data = requests.get(url, headers=headers).json()
    modules = data['modulus']
    exponent = data['exponent']
    return modules, exponent

eeblackbox = """
0002MDAwN0xTVE9LRU4wMDI0NTIxYWFiYjctYzI5Yi00NDMyLWFlYzEtNGQzYWZkMjQwMjVlMDAwNklOVExPQzAwMjJodHRwczovL2NuLmZhd214LmNvbS9ob21lL3JlZ2lzdGVyMDAwN1BSSVZBVEUwMDA1ZmFsc2UwMDA1SkVOQkwwMDAxMTAwMDVKU1NSQzAwMjBodHRwczovL3d3dy5mNGJ6eXJ6OTJ1czMuY29tL0UyLzAwMDRVQUdUMDA3NU1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTcuMC4wLjAgU2FmYXJpLzUzNy4zNjAwMDdKU1RPS0VOMDAyNDUyMWFhYmI3LWMyOWItNDQzMi1hZWMxLTRkM2FmZDI0MDI1ZTAwMDdIQUNDTE5HMDAwZXpoLUNOLHpoO3E9MC45MDAwN0hBQ0NDSFIwMDBmVW5pY29kZSAoVVRGLTgpMDAwNUpTVkVSMDAwMzIuMDAwMDRUWk9OMDAwNC00ODAwMDA2SlNUSU1FMDAxNzIwMjMvMTAvMTkgMDY6NTU6NDUuMzQ1MDAwN1NWUlRJTUUwMDE1MTAvMTkvMjAyMyA2OjU1OjQ1IEFNMDAwNUpCUk5NMDAwNkNocm9tZTAwMDVKQlJWUjAwMDkxMTcuMC4wLjAwMDA1SkJST1MwMDE2SW50ZWwgTWFjIE9TIFggMTBfMTVfNzAwMDVKQlJDTTAwMTFLSFRNTCwgbGlrZSBHZWNrbzAwMDVKTEFORzAwMDV6aC1DTjAwMDRKUkVTMDAwODkwMHgxNDQwMDAwNkpQTEdOUzAwNjRpbnRlcm5hbC1wZGYtdmlld2VyO2ludGVybmFsLXBkZi12aWV3ZXI7aW50ZXJuYWwtcGRmLXZpZXdlcjtpbnRlcm5hbC1wZGYtdmlld2VyO2ludGVybmFsLXBkZi12aWV3ZXI7MDAwNElHR1kwMDJjQ3pUK1RDNGl4VWlsN1NwKy9iS3JxVFdKZUJiTDVrQWQ1OHUxVEVRZzdvMD0wMDA1QVBWRVIwMDZkNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTcuMC4wLjAgU2FmYXJpLzUzNy4zNjAwMDVBUE5BTTAwMDhOZXRzY2FwZTAwMDVOUExBVDAwMDhNYWNJbnRlbDAwMDJNVjAwMjBFRkJENkY0NDhDNjI4QUY2QzRGM0U3RTk5RjA4NjJDMzAwMDNFVFQwMDU4b3dpV1NONjFac2tac1dBajdHYTF4UElEVnVNakRRYkRYM2RCMTY0RW1YWjhxK0dQR1NuUFhxaTJpaXRPYnFYTHloQjhDbVpjWHcxbEpvd0VBYlk5WUE9PTAwMDRFVFBUMDA1OFJTMit3SGpmdXVxSzQvMWp5M2NMc29ZNVk5TlZXcFkxMXhKQS9Ib0U2eGNuVWpKdmJseG4yWGtkWCtwVWYyNEFvOTZxMEQ5eHN4ZU9oT1JOSm5oZ2hnPT0wMDA0SExCVzAwMDEwMDAwOFdEQlRPS0VOMDAyNDUyMWFhYmI3LWMyOWItNDQzMi1hZWMxLTRkM2FmZDI0MDI1ZTAwMDZDVE9LRU4wMDI0NTIxYWFiYjctYzI5Yi00NDMyLWFlYzEtNGQzYWZkMjQwMjVl
"""


def get_fkey(phone):
    url = 'https://cn.fawmx.com/ee/loginverification'
    data = {
        'eeblackbox': eeblackbox,
        'info': phone,
        'p': '',
        'fkey': 0
    }
    res = requests.post(url, headers=headers, data=json.dumps(data))
    print("f_key:::",res.json()['response'])
    return res.json()['response']


def login(phone, pwd):
    url = 'https://cn.fawmx.com/kz/member/loginAdvance?r=0.5131477572149417'
    data = {
        'loginpwd': pwd,
        'loginame': phone,
        'verifycode': '1234',
        'fkey': get_fkey(phone),
        'captchaMethod': 0,
        'captchaToken': '',
        'loginMethod': 0
    }
    print(json.dumps(data))
    res = requests.post(url, headers=headers, data=data)
    return res.json()


if __name__ == '__main__':
    modules, exponent = vpkey()
    # print(get_fkey())
    phone = '12623542162'
    pas = '123456'
    pwd = JS.call('fn', pas, modules, exponent)
    data = login(phone,pwd)
    print(data)