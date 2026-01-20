// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://widsnenwgvkisxjfosvf.supabase.co'; // paste your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZHNuZW53Z3ZraXN4amZvc3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMTYzMDUsImV4cCI6MjA2ODc5MjMwNX0.ZWjKk_b9-Xmr1jMcyea8h8ygF3SQjPpOzRGgG64m8zw';              // paste your key


export const supabase = createClient(supabaseUrl, supabaseKey);