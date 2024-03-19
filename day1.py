# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/07/11
# @File : day1.py
# import collections
#
# words2 = ['is', 'as', 'is', 'man']
# dict = collections.Counter(words2)
# print(dict,type(dict))
# for w, n in dict.items():
#     print(w, n)

a1 = [523,591,606,612,624,507,647,135,28,455,589,224,630,43,656,581,597]

a2 = [656,43,129,581,591,612,606,223,663,224,658,647,135,630,507,624,589,652,28,287,597]

a3 = []
for id in a2 :
    for id_1 in a1:
        if id == id_1:
            a3.append(id)
print(f'3.13号活跃主播数：{len(a2)}个')
print(f'3.14号活跃主播数: {len(a1)}个')
print(f'两天都活跃的主播id: {a3}, 数量为: {len(a3)}个')
