import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContainer, Title, Content } from './styles/AppStyles';
import TasksDone from './components/TasksDone';
import ToolBar from './components/ToolBar';
import List from './components/List';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, isEditing: false, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, newName) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const toggleEdit = (index) => {
    setEditingIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleBlur = () => {
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
            editTask={editTask}
            handleBlur={handleBlur}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        )}
      </Content>
    </AppContainer>
  );
}

export default App;
