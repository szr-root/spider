# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import os

from itemadapter import ItemAdapter


class NewscrwalPipeline:
    def process_item(self, item, spider):
        # print('item:::', item)
        path = os.path.join('news', item['title'])
        # path = os.path.join('news', os.path.basename(item['url']).split('.')[0])

        with open(path + '.txt', 'w+') as f:
        # with open(path, 'w+') as f:
            f.write(item['url'] + '\n' + item['content'])
        return item
