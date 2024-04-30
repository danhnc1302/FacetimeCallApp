import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wmaslehxmzwklcgyozro.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtYXNsZWh4bXp3a2xjZ3lvenJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MTEzNTAsImV4cCI6MjAyOTk4NzM1MH0.iY6QNB3QjLWNVhKmhbhBCn-EcQlXZI7akB_jAKzCqaA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});