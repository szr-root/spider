# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/14
# @File : kugou.py
import json
import time

import requests
from hashlib import md5


def md5_encrypt(text):
    obj = md5()
    obj.update(text.encode())
    return obj.hexdigest()


def get_signature(data_dict: dict):
    u = 'NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt'
    params_list = []
    for key, value in data_dict.items():
        kv = f'{key}={value}'
        params_list.append(kv)
    params = u + ''.join(sorted(params_list)) + u
    signature = md5_encrypt(params)
    return signature


def get_emixsongid():
    headers = {
        "authority": "complexsearch.kugou.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "referer": "https://www.kugou.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    cookies = {
        "kg_mid": "0ffb96e42266d35aca513e8c6fcce724",
        "Hm_lvt_aedee6983d4cfc62f509129360d6bb3d": "1715683406",
        "Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d": "1715683406",
        "kg_dfid": "3MmxZH1JcAZ022oxiZ3Xas03",
        "kg_dfid_collect": "d41d8cd98f00b204e9800998ecf8427e",
        "kg_mid_temp": "0ffb96e42266d35aca513e8c6fcce724"
    }
    url = "https://complexsearch.kugou.com/v2/search/song"

    client_time = int(time.time() * 1000)
    params = {
        "callback": "callback123",
        "srcappid": "2919",
        "clientver": "1000",
        "clienttime": str(client_time),
        "mid": "0ffb96e42266d35aca513e8c6fcce724",
        "uuid": "0ffb96e42266d35aca513e8c6fcce724",
        "dfid": "3MmxZH1JcAZ022oxiZ3Xas03",
        "keyword": "周深",
        "page": "1",
        "pagesize": "30",
        "bitrate": "0",
        "isfuzzy": "0",
        "inputtype": "0",
        "platform": "WebFilter",
        "userid": "0",
        "iscorrection": "1",
        "privilege_filter": "0",
        "filter": "10",
        "token": "",
        "appid": "1014",
        # "signature": "b27d0c163bc12a1ca4b5957b052f2d3c"
    }

    signature = get_signature(params)
    params["signature"] = signature

    # print(params)
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    # 返回不完全是json格式，需要去掉前后的字符
    res = json.loads(response.text[12:-2])
    emix_song_id_list = res['data']['lists']
    res_list = []
    for song in emix_song_id_list:
        res_list.append(song['EMixSongID'])

    return res_list


def get_song_mp3(encode_album_audio_id):
    import requests

    headers = {
        "authority": "wwwapi.kugou.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "origin": "https://www.kugou.com",
        "referer": "https://www.kugou.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    url = "https://wwwapi.kugou.com/play/songinfo"
    params = {
        "srcappid": "2919",
        "clientver": "20000",
        "clienttime": str(int(time.time() * 1000)),
        "mid": "34b7603bfae35f989215bf921d2cd45d",
        "uuid": "34b7603bfae35f989215bf921d2cd45d",
        "dfid": "3MmxZH1JcAd81IGkMR2DJOk2",
        "appid": "1014",
        "platid": "4",
        "encode_album_audio_id": encode_album_audio_id,
        "token": "",
        "userid": "0",
        # "signature": "9bbd7b66d32e3690edeed697674181d1"
    }
    signature = get_signature(params)
    params["signature"] = signature
    response = requests.get(url, headers=headers, params=params)

    return [response.json()['data']['play_url'], response.json()['data']['audio_name']]


def download_mp3(play_url, audio_name):
    import requests

    headers = {
        "authority": "webfs.hw.kugou.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "range": "bytes=0-",
        "referer": "https://www.kugou.com/",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "audio",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    cookies = {
        "kg_mid": "34b7603bfae35f989215bf921d2cd45d",
        "Hm_lvt_aedee6983d4cfc62f509129360d6bb3d": "1715761886",
        "kg_dfid": "3MmxZH1JcAd81IGkMR2DJOk2",
        "kg_dfid_collect": "d41d8cd98f00b204e9800998ecf8427e",
        "Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d": "1715772646"
    }
    url = play_url
    response = requests.get(url, headers=headers, cookies=cookies)
    with open(f'./{audio_name}.mp3', 'wb') as f:
        f.write(response.content)
    # print(response.content)


if __name__ == "__main__":
    i = 0
    emix_song_id_list = get_emixsongid()
    for song_id in emix_song_id_list:
        i += 1
        play_url, audio_name = get_song_mp3(song_id)
        download_mp3(play_url, audio_name)
        # 仅下载3个试试水
        if i == 3:
            break
