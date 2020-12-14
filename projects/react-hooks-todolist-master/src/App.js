import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is simple text",
      isCompleted: false
    },
    {
      text: "You can generate more like this",
      isCompleted: false
    },
    {
      text: "But these are not persistant",
      isCompleted: false
    },
    {
      text: "You can remove these also",
      isCompleted: false
    },
    {
      text: "Delete me Sir!",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="bg-primary pt-5" style={{ height: "100vh" }}>
      <div className="container">
        <h1 className=" align-item-center">This is a Simple TODO App with CRUD Operations</h1>
        <TodoForm
          addTodo={addTodo}
        />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
