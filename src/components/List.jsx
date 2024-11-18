import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { TaskList, TaskItem, TaskName, EditButton, DeleteButton, CheckboxContainer, Checkbox } from '../styles/AppStyles';

const TaskListComponent = ({ tasks, editingIndex, toggleEdit, editTask, handleBlur, toggleComplete, deleteTask }) => (
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
);

export default TaskListComponent;
