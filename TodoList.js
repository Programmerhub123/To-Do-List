import React from 'react';

const TodoList = ({ tasks, toggleComplete, deleteTask, startEditing, editId, editText, setEditText, saveEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          {editId === task.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(task.id)}>Save</button>
            </div>
          ) : (
            <div>
              <span>{task.text}</span>
              <button onClick={() => startEditing(task.id, task.text)}>✏️</button>
              <button onClick={() => deleteTask(task.id)}>🗑</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
