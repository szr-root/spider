import requests


headers = {
    "authority": "api.livehouse.click",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://api.livehouse.click",
    "pragma": "no-cache",
    "referer": "https://api.livehouse.click/zoom/account/anchoraccount/",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    "x-csrftoken": "TWo2YbgUY18zhEOQ0vyw5ADqFmCx0go2C69ZGFItbZAgOYdqUfZMPZTzJifFlBYj",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "csrftoken": "TWo2YbgUY18zhEOQ0vyw5ADqFmCx0go2C69ZGFItbZAgOYdqUfZMPZTzJifFlBYj",
    "sessionid": "oou1c5vxh0au2dc6m92ybm6l16f4bve7"
}

data = {
    "acc_status": "0",
    "": ""
}

uids = ['523', '526', '528', '499', '454', '61', '47', '43', '106']
for uid in uids:
    print(uid)
    url = f"https://api.livehouse.click/zoom/account/anchoraccount/{uid}/patch/"
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    print(response.text)