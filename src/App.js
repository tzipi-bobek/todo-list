import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContainer, Title, Content } from './styles/AppStyles';
import TasksDone from './components/TasksDone';
import ToolBar from './components/ToolBar';
import List from './components/List';
import useGetTasks from './hooks/useGetTasks';
import useCreateTask from './hooks/useCreateTask';
import useEditTask from './hooks/useEditTask';
import useDeleteTask from './hooks/useDeleteTask';

function App() {
  const { tasks, setTasks } = useGetTasks();
  const { createTask } = useCreateTask();
  const { editTask } = useEditTask();
  const { deleteTask } = useDeleteTask();
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = async () => {
    if (newTask.trim() !== '') {
      const taskName = newTask;
      setNewTask('');
      const newTaskData = await createTask(taskName);
      setTasks([...tasks, newTaskData]);
    }
  };

  const handleDeleteTask = async (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    await deleteTask(id);
  };

  const handleEditTask = (index, newName) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const saveEditTask = async (id, name, completed) => {
    const updatedTask = await editTask(id, name, completed);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const toggleEdit = (index) => {
    setEditingIndex(index);
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(task => task.id === id);
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    await editTask(id, task.name, !task.completed);
  };

  const handleBlur = async (id, name, completed) => {
    await saveEditTask(id, name, completed);
    setEditingIndex(null);
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <AppContainer>
      <Title>{<FontAwesomeIcon icon={faSquareCheck} />} TODO</Title>
      <TasksDone completedTasks={completedTasks} totalTasks={tasks.length} />
      <Content>
        <ToolBar newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        {tasks.length === 0 ? (
          <p>Seems lonely in here, what are you up to?</p>
        ) : (
          <List
            tasks={tasks}
            editingIndex={editingIndex}
            toggleEdit={toggleEdit}
            editTask={handleEditTask}
            handleBlur={handleBlur}
            toggleComplete={toggleComplete}
            deleteTask={handleDeleteTask}
          />
        )}
      </Content>
    </AppContainer>
  );
}

export default App;
