import { createClient } from '@supabase/supabase-js';

// Retrieve credentials from GitHub environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepAlive() {
  console.log("Sending keep-alive ping to Supabase...");
  
  // This executes a lightweight query on your database schema
  const { data, error } = await supabase
    .from('_analytics') // Replace with any table name you own, or use a healthcheck query
    .select('id')
    .limit(1);

  if (error) {
    // If the table doesn't exist, a generic RPC or alternative check can be processed
    // Running a basic system check if table approach fails
    const { error: healthError } = await supabase.rpc('version').catch(() => ({ error: true }));
    
    if (healthError) {
      console.error("Ping failed:", error.message);
      process.exit(1);
    }
  }

  console.log("Success! Supabase database is active.");
  process.exit(0);
}

keepAlive();
