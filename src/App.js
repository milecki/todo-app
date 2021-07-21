import { useEffect, useRef, useState } from 'react';

import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  // eslint-disable-next-line no-unused-vars
  const [priority, setPriority] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    getTodosFromLocalStorage();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const filterTodosStatus = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'active':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        case 'priority':
          setFilteredTodos(todos.filter((todo) => todo.priority === true));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    const saveTodosToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    filterTodosStatus();
    saveTodosToLocalStorage();
  }, [todos, status]);

  const getTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <TodoForm
        inputText={inputText}
        inputRef={inputRef}
        setInputText={setInputText}
        setPriority={setPriority}
        setStatus={setStatus}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
};

export default App;
