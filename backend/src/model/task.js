const supabase = require('../config/supabaseClient');

class Task {
  static async findAll() {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) throw error;
    return data;
  }

  static async create(task) {
    const { data, error } = await supabase.from('tasks').insert(task).select().single();
    if (error) throw error;
    return data;
  }

  static async findByPk(id) {
    const { data, error } = await supabase.from('tasks').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  }

  static async update(id, updates) {
    const { data, error } = await supabase.from('tasks').update(updates).select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  }

  static async delete(id) {
    const { data, error } = await supabase.from('tasks').delete().eq('id', id);
    if (error) throw error;
    return data;
  }
}

module.exports = Task;
