# -*- coding: utf-8 -*-
import json
from make_ru_data import RU_EXTRA_DATA
from russian_lexicon import RU_CATALOG

all_ru_extra = RU_EXTRA_DATA + RU_CATALOG

with open('ru_extra.json', 'w', encoding='utf-8') as f:
    json.dump(all_ru_extra, f, ensure_ascii=False, indent=2)

print(f"Exported {len(all_ru_extra)} Russian extra words to ru_extra.json")
