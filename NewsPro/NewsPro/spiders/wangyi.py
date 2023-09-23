import scrapy
from NewsPro.NewsPro.items import NewsproItem

class WangyiSpider(scrapy.Spider):
    name = "wangyi"
    allowed_domains = ["www.163.com"]
    start_urls = ["https://www.163.com"]
    newsproitem = NewsproItem()

    def parse(self, response,*args,**kwargs):
        news_category_link_list = response.xpath('//li[contains(@class,"liw")]/a')
        for item in news_category_link_list:
            news_link = item.xpath('./@href').extract_first()
            category = item.xpath('./text()').extract_first()
            # print(news_link, category)

            if category == '科技':
                yield scrapy.Request(url=news_link, callback=self.get_technews_html, meta={"category": category})

    def get_technews_html(self, response):
        print('进入tech页面')
        news_list = response.xpath('//div[contains(@class,"main-news-area")]/div[@style]/a')
        # print(news_list)
        for news in news_list:
            news_title = news.xpath('./text()').extract()[0]
            news_link = news.xpath('.//@href').extract()[0]

            yield scrapy.Request(url=news_link,callback=self.get_news_detail,meta={"news_title":news_title})

    def get_news_detail(self,response):

        print('进入详情')
        news_content = response.xpath('//div[@class="post_body"]/p/text()').extract()
        print(response.meta.get('news_title'),":::::::", ''.join(news_content))
