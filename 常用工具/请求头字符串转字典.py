# python 脚本--》把字符串转 字典
header = '''
Mobile-Token	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjcwODM4OTQ0MDY3ODU0MzM4IiwiZXhwIjoxNzEwMzQzOTk3LCJpYXQiOjE3MTAzNDAzOTcsInVzZXJJZCI6IjE2NzA4Mzg5NDQwNjc4NTQzMzgiLCJ1c2VybmFtZSI6IjE4OTUzNjc1MjIxIn0.-d6jE4WxH8o_X8o5xMtw0eQ--A_qilWAQpH5rxC66Xw
user-agent	Mozilla/5.0 (Linux; Android 11; Pixel 2 XL Build/RP1A.201005.004.A1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/28.0)
Content-Type	application/json
Content-Length	81
Host	miappshop.jshulin.com
Connection	Keep-Alive
Accept-Encoding	gzip
'''

def header_str_to_dict(header_str):
    res = [item for item in
           header_str.split('\n')]
    res = res[1:len(res) - 1]
    d = {item.split('\t')[0]: item.split('\t')[1] for item in res}
    return d

res = header_str_to_dict(header)
print(res)


# python 脚本把查询字段转成字典
# s = 'appId=32&hashSign=8356ebae71a0aa643f87ad4c5691a456&imgUrl=&lat=29.568295&lng=106.559123&loginName=18953675221&nickName=&openId=&place=%E9%87%8D%E5%BA%86&pwd=25d55ad283aa400af464c76d713c07ad&sessionId=392032c5-09c8-4c3c-bb17-16a1dc49f7fc&token=&type='
s = 'fromUserId=1755328&toUserId=655247&objectName=RC:TxtMsg&content={"content":"hello","extra":"helloExtra"}&isPersisted=1&disablePush=0'
# 把它转成字典

def query_to_dict(s):
    return {item.split('=')[0]: item.split('=')[1] for item in s.split('&')}


print(query_to_dict(s))
