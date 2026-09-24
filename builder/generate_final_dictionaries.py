# -*- coding: utf-8 -*-
"""
Forgotten Words - Final 1000+ Words Generator for RU and EN.
Assembles, validates, deduplicates, and generates final words_ru.js and words_en.js.
"""

import os
import re
import json

# ==========================================
# 1. LOAD EXISTING JS ARRAYS
# ==========================================
def parse_js_array_file(filepath):
    if not os.path.exists(filepath):
        print(f"Warning: {filepath} not found.")
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match entries like: ['Word', '[pron]', 'era', 'meaning', 'etymology', 'quote', 'source']
    # Using flexible regex that handles single or double quotes
    pattern = re.compile(
        r"\[\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\s*\]"
    )
    results = []
    for match in pattern.finditer(content):
        results.append([
            match.group(1).strip(),
            match.group(2).strip(),
            match.group(3).strip(),
            match.group(4).strip(),
            match.group(5).strip(),
            match.group(6).strip(),
            match.group(7).strip()
        ])
    return results

print("Parser module loaded.")
