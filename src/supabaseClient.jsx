import { createClient } from '@supabase/supabase-js';

// Tus credenciales de Supabase
const supabaseUrl = 'https://qwvhrtdddpmaovnyarhr.supabase.co'; // Tu URL de proyecto de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dmhydGRkZHBtYW92bnlhcmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTU4MDUsImV4cCI6MjA2Nzg3MTgwNX0.BR9fF63sNEuoLmjQDfTj7xCVXZl9CnwOxvU-Net33Nw'; // <--- ¡ESTA ES LA CLAVE CORRECTA!

// Inicializa el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Exporta también el módulo de autenticación
export const auth = supabase.auth;
