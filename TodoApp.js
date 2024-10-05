import { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);              
  const [editId, setEditId] = useState(null);          
  const [editText, setEditText] = useState('');        

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false, }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editText } : task)));
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <TodoInput addTask={addTask} />
      
      
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        startEditing={startEditing}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default TodoApp;
