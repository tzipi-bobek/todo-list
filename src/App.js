import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const AppContainer = styled.div`
  background-color: #000000; /* Negro puro */
  color: #ffffff;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 15px;
  }

  @media (min-width: 1025px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 2em;
  align-self: flex-start;
  margin-left: 25%;

  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 5%;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.75em;
    margin-left: 5%; 
  }
`;

const TaskSummary = styled.div`
  // margin-top: 10px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 15px;
    max-width: 280px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.1em;
    padding: 18px;
    max-width: 300px; 
  }
`;

const TaskTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
`;

const TaskDone = styled.div`
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.3em;
  }
`;

const KeepItUp = styled.div`
  font-size: 1em;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.9em;
  }
`;

const TaskCount = styled.span`
  background-color: #88b53e; /* Verde actualizado */
  color: #ffffff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 2em;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    padding: 8px;
    font-size: 1.5em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    padding: 9px;
    font-size: 1.5em;
  }
`;

const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 5px;
    max-width: 280px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    margin-top: 10px;
    max-width: 300px;
  }
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #2c2c2c;
  color: #ffffff;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

const AddButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #88b53e;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent; /* Transparente */
  border: 1px solid #ffffff;
  border-radius: 0; /* Bordes cuadrados */
  margin-bottom: 10px;
  width: 100%;
  position: relative; /* Necesario para position: absolute de los hijos */
  min-height: 30px;

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

const TaskName = styled.input`
  flex: 1;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

const EditButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: transparent; /* Botón transparente */
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;

  @media (max-width: 600px) {
    padding: 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 4.5px;
  }
`;

const DeleteButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: transparent; /* Botón transparente */
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;

  @media (max-width: 600px) {
    padding: 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 4.5px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%; /* Checkbox redondo */
  border: 2px solid #88b53e; /* Borde verde */
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  &:checked {
    background-color: #88b53e; /* Verde actualizado */
  }

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 19px;
    height: 19px;
  }
`;

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
