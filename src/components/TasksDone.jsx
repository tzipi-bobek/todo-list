import React from 'react';
import { TaskSummary, TaskTextContainer, TaskDone, KeepItUp, TaskCount } from '../styles/AppStyles';

const TaskSummaryComponent = ({ completedTasks, totalTasks }) => (
  <TaskSummary>
    <TaskTextContainer>
      <TaskDone>Task Done</TaskDone>
      <KeepItUp>Keep it up</KeepItUp>
    </TaskTextContainer>
    <TaskCount>{completedTasks}/{totalTasks}</TaskCount>
  </TaskSummary>
);

export default TaskSummaryComponent;
