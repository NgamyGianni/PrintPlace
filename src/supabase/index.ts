
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, "")

