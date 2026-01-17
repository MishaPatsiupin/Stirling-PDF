import { createClient, SupabaseClient } from '@supabase/supabase-js';

// DISABLED: Network interactions removed as per user requirements
export const isSupabaseConfigured = false;

// Create client only if configured, otherwise export null
export const supabase: SupabaseClient | null = null;
