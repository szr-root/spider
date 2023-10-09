# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/09/30
# @File : 请求+execJs.py
import json

import execjs
import requests

with open('网易云加密.js') as f:
    jsCode = f.read()

js = execjs.compile(jsCode)

song_id = 299714

song_info = {"ids": f"[{song_id}]", "level": "standard", "encodeType": "aac", "csrf_token": ""}

data = (json.dumps(song_info),
        '010001',
        '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7',
        '0CoJUm6Qyw8W8jud')

ret = js.call('d', *data)

request_Data = {
    'params': ret.get('encText'),
    'encSecKey': ret.get('encSecKey')
}
print(request_Data)

headers = {
    'Referer': 'https://music.163.com/',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Cookie': '__bid_n=18571b32b1035894df4207; FEID=v10-fee76f84adf74ca5e3874c803276c483d40ab5c2; __xaf_fpstarttimer__=1672649845550; __xaf_fptokentimer__=1672649845924; __xaf_thstime__=1672649845926; FPTOKEN=8R1rsU3C5EwcAf14hhZ9zzyGnlC+S6bLwDqnL4STQ2sDN9TyoNwgcNyr7q0wnypc+NeCzbCab4Nf4a539WjHJhadiQA9FEQ5vIxuUe3mkLj1pp2mBPEW1bC4Wtz+mbNdY1gvfR0Q0A55cbu1JwIsbRxHj1sCKHyCXVugGGxeDNxUaQG2b+Eul1XKhY8XPJ7VbnOCibyefMTuzOTrpNIEGkU7NTG+4Usfb4ZlSPnxinqlpRd4gBwYkSZL2rA/VrIPdbuHd2No5QJtpXATa/Hry5zmTuOPw/lKr7shA/LsdfPiia2FGFyzN3MUgTOYx9tPzPb1LtQui5uq8ykkf92fAXiL8jdOkDhEY5g0f/XmuBdLl12lRFwmQcg4KlA8kyt+LEC2PX5cTit6AcI7powaeg==|zxisgTiatwvySF8M8dkYEDt9fNvTKZfnMNwNkN3vrJw=|10|ddb16209c0a3c2d3a5287cf88fe6b076; _ntes_origin_from=; Hm_lvt_f8682ef0d24236cab0e9148c7b64de8a=1695301796; ne_analysis_trace_id=1695458257586; Hm_lpvt_f8682ef0d24236cab0e9148c7b64de8a=1695458259; vinfo_n_f_l_n3=3720faf9ef4f4a49.1.13.1675214673634.1695607695378.1695711875918; NMTID=00OgzOaSWuq4p9Unk3cjMNfcdeeEIUAAAGK4-J0XQ; _iuqxldmzr_=32; _ntes_nnid=eecb4e29ad0a7108201ed844e846bf70,1696040386726; _ntes_nuid=eecb4e29ad0a7108201ed844e846bf70; WEVNSM=1.0.0; WNMCID=lkneyi.1696040387792.01.0; WM_TID=bDfd1m1vqvRAEEUUFUeRatO0mCw7Fv35; WM_NI=7ik85OmuLpBA2yY1eZHsdeEBiflwKan2HU0keL98OK6BTgYJ1doeq998ZV%2BebPWMj%2BOtC%2BdKuGLeawOnYOb%2FHuYsQzMeK5sQEd8lezzQTsFgwhQ%2BQ7NxO8t4%2FDc61nJuYmI%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee91f553b493fa84c740f2ef8ea6c54b979e9fb0d439a3f084d7c56287ea8497dc2af0fea7c3b92af5b7a5d9b845afab8491c14bf2a797d2e8528cadac86c84aabbaa498ca6baeee88b6b361a794f7d9ce41f69e9c88dc42f3bca186f433fbe896b7aa6fa29099aee9218dac8dcce741b7998486e47d8db297b0e1258cab9794d4728fbb85d6f25b87bcf88de872ba8f9c94c56db5b89fccd43d8ea881d9f740ed9cadd7b4668aab978ecc37e2a3; ntes_utid=tid._.j3hv2WbkPz1ARhUVAVbAiLweuAnXwdn3._.0; sDeviceId=YD-%2FszdcmxLF05BV0AQRVLBmexK6Q3TxNzr; playerid=14235709; JSESSIONID-WYYY=o1Odlh%2Fqtv3iOW74fnZR8rvWjDgr4KDXxGOCFIbxj%2B5HIPUII1V%2BjPovxU9sXzfTVCQdJ%2BRI61PKHqi2KwgldUXPzR%2FV4gOHV8O6rTKd%2BePohNBsEu4G3DBYYpxlojOk4js%2BIjrQUK2dRqbnESqxCe%2FrwNiMJkwWYOZMgh4H8s%2BIo5hV%3A1696060203488'

}

res = requests.post(url='https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=',
                    data=request_Data,
                    headers=headers)


song_url = res.json().get('data')[0].get('url')
print(song_url)

song = requests.get(song_url)
with open('song1.m4a','wb') as f:
    f.write(song.content)

