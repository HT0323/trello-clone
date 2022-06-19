import React from 'react';
import {AddTaskCardButton} from './button/AddTaskCardButton';
import {TaskCard} from './TaskCard';

export const TaskCards = () => {
  return (
    <div className="taskCardArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
