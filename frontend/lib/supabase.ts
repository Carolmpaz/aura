import { createClient } from '@supabase/supabase-js'
import { Pool } from 'pg'

// Supabase configuration
const supabaseUrl = 'https://laqipjksvlejhfalgjdb.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcWlwamtzdmxlamhmYWxnamRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MjQ4MDAsImV4cCI6MjA0ODIwMDgwMH0.example'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database connection using the correct Supabase pooler connection string
export const dbPool = new Pool({
  connectionString: 'postgresql://postgres.laqipjksvlejhfalgjdb:auraganhador301@aws-1-us-east-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Function to save user data to the users table
export async function saveUserToDatabase(name: string, phone: string) {
  const client = await dbPool.connect()
  try {
    const query = 'INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING *'
    const result = await client.query(query, [name, phone])
    console.log('User saved successfully:', result.rows[0])
    return result.rows[0]
  } catch (error) {
    console.error('Error saving user to database:', error)
    throw error
  } finally {
    client.release()
  }
}
