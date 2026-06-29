import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL || '';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(url, key);

/*
Supabase usage:
- Use storage for optional backups
- Use a table 'products' with JSON metadata for history
*/
