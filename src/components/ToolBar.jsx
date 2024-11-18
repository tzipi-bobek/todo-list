import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskInputContainer, TaskInput, AddButton } from '../styles/AppStyles';

const TaskInputComponent = ({ newTask, setNewTask, addTask }) => (
  <TaskInputContainer>
    <TaskInput
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Write your next task"
    />
    <AddButton onClick={addTask}>
      <FontAwesomeIcon icon={faPlus} className="text-dark" />
    </AddButton>
  </TaskInputContainer>
);

export default TaskInputComponent;
