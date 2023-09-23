import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from scrapy_redis.spiders import RedisSpider
from RedisNewsCrwal.RedisNewsCrwal.items import RedisnewscrwalItem

class A163techNewsSpider(RedisSpider):
    name = "163tech_news"
    # allowed_domains = ["163.com"]
    # start_urls = ["https://163.com"]
    article_num = 0
    # link1 = LinkExtractor(tags=['a'], attrs='href', deny_extensions=[''],)
    link1 = LinkExtractor(allow='https://tech.163.com.*?',)
    link2 = LinkExtractor(allow='https://.*?.163.com.*?/tech/article.*?')
    rules = (
        Rule(link1, follow=True),
        Rule(link2, callback='parse_item', follow=False),
    )

    def parse_item(self, response):
        # item = {}
        # item["domain_id"] = response.xpath('//input[@id="sid"]/@value').get()
        # item["name"] = response.xpath('//div[@id="name"]').get()
        # item["description"] = response.xpath('//div[@id="description"]').get()
        # return item
        yield scrapy.Request(url=response.url, dont_filter=True, callback=self.get_detail,meta={'url':response.url} )
        # print(response.url)

    def get_detail(self, response):
        post_main = response.xpath('//div[@class="post_main"]')
        title = post_main.xpath('./h1[@class="post_title"]/text()').extract_first()
        content_list = post_main.xpath('./div[@class="post_content"]/div[@class="post_body"]//p//text()').extract()
        # print(type(content_list),content_list)
        content = ''.join([i.strip() for i in content_list])
        # print(content)
        # print('info::::', title, 'content:::', content)
        news_item = NewscrwalItem()
        news_item['title'] = title
        news_item['content'] = content
        self.article_num += 1
        news_item['num'] = self.article_num
        url = response.meta['url']
        news_item['url'] = url
        yield news_item