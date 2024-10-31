import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {
  AppContainer,
  Title,
  TaskSummary,
  TaskTextContainer,
  TaskDone,
  KeepItUp,
  TaskCount,
  Content,
  TaskInputContainer,
  TaskInput,
  AddButton,
  TaskList,
  TaskItem,
  TaskName,
  EditButton,
  DeleteButton,
  CheckboxContainer,
  Checkbox
} from './styles/AppStyles';

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
      {/* <ContentContainer> */}
      <TaskSummary>
        <TaskTextContainer>
          <TaskDone>Task Done</TaskDone>
          <KeepItUp>Keep it up</KeepItUp>
        </TaskTextContainer>
        <TaskCount>{completedTasks}/{tasks.length}</TaskCount>
      </TaskSummary>
      <Content>
        <TaskInputContainer>
          <TaskInput
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Write your next task"
          />
          <AddButton onClick={addTask}>
            <FontAwesomeIcon icon={faPlus} />
          </AddButton>
        </TaskInputContainer>
        {tasks.length === 0 ? (
          <p>Seems lonely in here, what are you up to?</p>
        ) : (
          <TaskList>
            {tasks.map((task, index) => (
              <TaskItem key={index}>
                {editingIndex === index ? (
                  <TaskName
                    type="text"
                    value={task.name}
                    onChange={(e) => editTask(index, e.target.value)}
                    onBlur={handleBlur}
                    autoFocus
                  />
                ) : (
                  <>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(index)}
                      />
                    </CheckboxContainer>
                    <TaskName
                      type="text"
                      value={task.name}
                      disabled
                      onClick={() => toggleEdit(index)}
                    />
                    <EditButton onClick={() => toggleEdit(index)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </EditButton>
                    <DeleteButton onClick={() => deleteTask(index)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </DeleteButton>
                  </>
                )}
              </TaskItem>
            ))}
          </TaskList>
        )}
      </Content>
    </AppContainer>
  );

}

export default App;
