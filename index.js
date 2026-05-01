import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gilccbjqdkzdhyirzgan.supabase.co'
const supabaseKey = 'sb_publishable_8WtZA-vuJXJjIWzsGmLhhg_VCyPwsfb'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
const { data, error } = await supabase
.from('estudiantes')
.select('*')
if (error) {
console.log('Error:', error)
} else {
console.log('Datos:', data)
}
}
obtenerEstudiantes()