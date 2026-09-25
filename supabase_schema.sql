-- ========================================================
-- FORGOTTEN WORDS - SUPABASE DATABASE SCHEMA
-- Run this in Supabase Dashboard -> SQL Editor
-- ========================================================

-- 1. Create main 'words' table
CREATE TABLE IF NOT EXISTS public.words (
    id BIGSERIAL PRIMARY KEY,
    word TEXT NOT NULL,
    transcription TEXT,
    meaning TEXT NOT NULL,
    modern_synonym TEXT,
    era TEXT,
    era_name TEXT,
    type TEXT,
    category TEXT,
    category_name TEXT,
    source TEXT,
    lang TEXT NOT NULL DEFAULT 'ru',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast searches and filtering
CREATE INDEX IF NOT EXISTS idx_words_lang ON public.words(lang);
CREATE INDEX IF NOT EXISTS idx_words_word ON public.words(word);
CREATE INDEX IF NOT EXISTS idx_words_category ON public.words(category);
CREATE INDEX IF NOT EXISTS idx_words_era ON public.words(era);

-- Enable Row Level Security (RLS)
ALTER TABLE public.words ENABLE ROW LEVEL SECURITY;

-- Drop old policies if any to avoid errors on rerun
DROP POLICY IF EXISTS "Allow public read on words" ON public.words;
DROP POLICY IF EXISTS "Allow anon insert on words" ON public.words;

-- Allow public read access to words
CREATE POLICY "Allow public read on words" 
ON public.words FOR SELECT 
TO anon, authenticated 
USING (true);

-- Allow inserting words (for seeding and admin)
CREATE POLICY "Allow anon insert on words" 
ON public.words FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);


-- 2. Create 'suggested_words' table (Community proposals)
CREATE TABLE IF NOT EXISTS public.suggested_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    word TEXT NOT NULL,
    lang TEXT NOT NULL DEFAULT 'ru',
    modern_synonym TEXT,
    type TEXT,
    category TEXT,
    meaning TEXT NOT NULL,
    source TEXT,
    author TEXT,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for suggested_words
ALTER TABLE public.suggested_words ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public submit words" ON public.suggested_words;
DROP POLICY IF EXISTS "Allow read suggestions" ON public.suggested_words;

-- Allow anyone to submit a word from website
CREATE POLICY "Allow public submit words" 
ON public.suggested_words FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Allow reading suggestions
CREATE POLICY "Allow read suggestions" 
ON public.suggested_words FOR SELECT 
TO anon, authenticated 
USING (true);
