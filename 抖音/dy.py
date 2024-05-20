# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/05/20
# @File : dy.py
import requests


headers = {
    "authority": "www.douyin.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "referer": "https://www.douyin.com/user/MS4wLjABAAAAsgpKzepJeogh1GpGwUDGhJK91EwnRZULQnyUbbNNH5M",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
cookies = {
    "__ac_nonce": "0664af12800d49b786be6",
    "__ac_signature": "_02B4Z6wo00f01lRlMagAAIDDE1zamf9JEYJURTUAAPNi90",
    "ttwid": "1%7CwBOiMnMq9N5_996fGIlqAITe2zlhV8_76LTP347FN8Q%7C1716187432%7Caf45e26b31c0d27dfdf865e8ea3a60d1627b125b863957c3e9b16623a2b412ba",
    "douyin.com": "",
    "device_web_cpu_core": "8",
    "device_web_memory_size": "8",
    "home_can_add_dy_2_desktop": "%220%22",
    "dy_swidth": "1440",
    "dy_sheight": "900",
    "s_v_web_id": "verify_lweloqgq_Iukp0xD8_Ef6c_4h5c_8DfC_dxS11HgUfaef",
    "FORCE_LOGIN": "%7B%22videoConsumedRemainSeconds%22%3A180%7D",
    "csrf_session_id": "b1b76d15231c04d84833dabf13323e9f",
    "strategyABtestKey": "%221716187433.948%22",
    "volume_info": "%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.5%7D",
    "passport_csrf_token": "1236e7fea5bec69edf45d5addeb0e286",
    "passport_csrf_token_default": "1236e7fea5bec69edf45d5addeb0e286",
    "bd_ticket_guard_client_web_domain": "2",
    "SEARCH_RESULT_LIST_TYPE": "%22single%22",
    "stream_player_status_params": "%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22",
    "download_guide": "%222%2F20240520%2F0%22",
    "stream_recommend_feed_params": "%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1440%2C%5C%22screen_height%5C%22%3A900%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A100%7D%22",
    "bd_ticket_guard_client_data": "eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQ1FIa0NweHFXSmlOZmw0VjFzUlJEUkZKdGs1RSthZzJLVjJXS2hVUmhzMGFxeUcrRzFXTGFxMmx1dkhmOFJRb2l0eXVDUmNWa2lJS1B3enNieS9KOXM9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D",
    "msToken": "4MeNRmTTwi2zsSEvkqO6TdXzQhuge-RFvikpWCNBE1qBDepumEvOfxRyhMPYNFyb9E1iAQAfkE2BIeer4ih9n3RJq_JbGUC9H4HcAoW08tMRZW4fXU4RcOI7rpWpUQ==",
    "IsDouyinActive": "true"
}
url = "https://www.douyin.com/aweme/v1/web/aweme/post/"
params = {
    "device_platform": "webapp",
    "aid": "6383",
    "channel": "channel_pc_web",
    "sec_user_id": "MS4wLjABAAAAsgpKzepJeogh1GpGwUDGhJK91EwnRZULQnyUbbNNH5M",
    "max_cursor": "0",
    "locate_query": "false",
    "show_live_replay_strategy": "1",
    "need_time_list": "1",
    "time_list_query": "0",
    "whale_cut_token": "",
    "cut_version": "1",
    "count": "18",
    "publish_video_strategy_type": "2",
    "update_version_code": "170400",
    "pc_client_type": "1",
    "version_code": "290100",
    "version_name": "29.1.0",
    "cookie_enabled": "true",
    "screen_width": "1440",
    "screen_height": "900",
    "browser_language": "zh-CN",
    "browser_platform": "MacIntel",
    "browser_name": "Chrome",
    "browser_version": "119.0.0.0",
    "browser_online": "true",
    "engine_name": "Blink",
    "engine_version": "119.0.0.0",
    "os_name": "Mac OS",
    "os_version": "10.15.7",
    "cpu_core_num": "8",
    "device_memory": "8",
    "platform": "PC",
    "downlink": "10",
    "effective_type": "4g",
    "round_trip_time": "100",
    "webid": "7370968808356283938",
    "verifyFp": "verify_lweloqgq_Iukp0xD8_Ef6c_4h5c_8DfC_dxS11HgUfaef",
    "fp": "verify_lweloqgq_Iukp0xD8_Ef6c_4h5c_8DfC_dxS11HgUfaef",
    "msToken": "BKwayLcJ8hYENb_R6DrGQYQ9TZ6TY9DubvRqUHgw_p6pirmDKSbGJXfwcXKe5935kZ9T2bH9uqiAAzYbnfBjGDXGBr70qHsE9Mt5HSb1prEYAeK7g5E5zvNT_JAVZQ==",
    "a_bogus": "Q6WhMR0fdk6T6DSk5vdLfY3q6AZ3Yhcr0trE/D2fAxvnaL39HMPH9exoDGzvsqRjLG/lIe8jy4hbTpcprQA98Zwf98vx/25DsfSkKl3psoWG5riHCLXgrUvq-hs1tMK25kp-EKigq7lHFbbdlnAn5wrvPE9japykTiyxypaC3pHX"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)