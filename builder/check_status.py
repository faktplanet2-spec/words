# -*- coding: utf-8 -*-
import os
import re

def parse_js_file(filepath):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    pattern = re.compile(r"\[\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*\]")
    items = []
    for m in pattern.finditer(text):
        items.append([m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6), m.group(7)])
    return items

ru1 = parse_js_file('words_ru.js')
ru2 = parse_js_file('builder/ru_words_extra.js')

from make_ru_data import RU_EXTRA_DATA
from russian_lexicon import RU_CATALOG

all_ru = {}
for w in ru1 + ru2 + RU_EXTRA_DATA + RU_CATALOG:
    key = w[0].lower().strip()
    if key not in all_ru:
        all_ru[key] = w

print('RU 1 (words_ru.js):', len(ru1))
print('RU 2 (ru_words_extra.js):', len(ru2))
print('RU 3 (make_ru_data.py):', len(RU_EXTRA_DATA))
print('RU 4 (russian_lexicon.py):', len(RU_CATALOG))
print('Total unique RU so far:', len(all_ru))
