const Task = require('../model/task');

class TaskController {
  configureRoutes(app) {
    app.get('/tasks', this.getTasks.bind(this));
    app.post('/save', this.createTask.bind(this));
    app.put('/edit/:id', this.updateTask.bind(this));
    app.delete('/delete/:id', this.deleteTask.bind(this));
  }

  async getTasks(req, res) {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  }

  async createTask(req, res) {
    try {
      const { name } = req.body;
      const newTask = await Task.create({ name });
      res.json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { name, completed } = req.body;
      const task = await Task.findByPk(id);
      if (task) {
        task.name = name;
        task.completed = completed;
        await task.save();
        res.json(task);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (task) {
        await task.destroy();
        res.json({ message: 'Task deleted' });
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}

module.exports = new TaskController();
