// plugins/supabase.js
import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lmhnvhaprafszwpvstge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtaG52aGFwcmFmc3p3cHZzdGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NjAwNzgsImV4cCI6MjAzNTIzNjA3OH0.7ZgJqoJlJbl86WV4SoyZnJT_CuC_I57aTkybv-qQ2e0";
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      supabase
    }
  }
})
