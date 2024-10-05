import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask(""); 
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TodoInput;
