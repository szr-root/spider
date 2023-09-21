import requests
from bs4 import BeautifulSoup

url = "https://tech.qq.com/"
response = requests.get(url)
content = response.text

soup = BeautifulSoup(content, 'html.parser')
news_list = soup.find_all(class_="Q-tpWrap")

for news in news_list:
    title = news.find('a').text
    link = news.find('a')['href']
    print('标题：', title)
    print('链接：', link)
    print('---')
