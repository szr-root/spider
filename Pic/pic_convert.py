# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2024/03/05
# @File : pic_convert.py
from PIL import Image

# 打开WebP图像文件
image = Image.open('sb.webp')

# 保存为PNG格式
image.save('sb.png', 'PNG')