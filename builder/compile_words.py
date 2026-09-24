# -*- coding: utf-8 -*-
"""
Forgotten Words - Massive Database Compiler
Compiles >= 1000 authentic Russian words and >= 1000 authentic English words.
"""

import json
import re
import os

def load_existing_js_array(filepath, var_name):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Extract entries: [ 'word', 'pron', 'era', 'meaning', 'etym', 'quote', 'source' ]
    # Using regex to find array literals
    pattern = re.compile(
        r"\[\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*\]"
    )
    matches = pattern.findall(text)
    items = []
    for m in matches:
        items.append([m[0], m[1], m[2], m[3], m[4], m[5], m[6]])
    return items

print("Script template ready")
