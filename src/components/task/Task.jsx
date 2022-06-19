import React from 'react';

export const Task = ({task}) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
