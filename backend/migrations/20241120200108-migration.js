const supabase = require("../src/config/supabaseClient");
async function createTable() {
  const { error } = await supabase.rpc('create_tasks_table');
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully');
  }
}

createTable();
