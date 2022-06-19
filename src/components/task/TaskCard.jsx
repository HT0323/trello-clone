import React, {useState} from 'react';
import {TaskCardDeleteButton} from './button/TaskCardDeleteButton';
import {TaskAddInput} from './input/TaskAddInput';
import {TaskCardTitle} from './TaskCardTitle';
import {Tasks} from './Tasks';

export const TaskCard = () => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks inputText={inputText} taskList={taskList} />
    </div>
  );
};
