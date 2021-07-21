const Todo = ({ setTodos, text, todo, todos }) => {
  const handleDeleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleSetAsPriorityTodo = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            priority: !el.priority,
          };
        }
        return el;
      })
    );
  };

  const handleEditTodo = () => {
    const newText = prompt('Edit your todo');

    if (!newText) {
      return;
    }

    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            text: newText,
          };
        }
        return el;
      })
    );
  };

  const handleCompleteTodo = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.priority ? (
          <i className="fas fa-star"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
        {text}
      </li>
      <button onClick={handleCompleteTodo} className="btn complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleSetAsPriorityTodo} className="btn priority-btn">
        <i className="fas fa-star"></i>
      </button>
      <button onClick={handleEditTodo} className="btn edit-btn">
        <i className="far fa-edit"></i>
      </button>
      <button onClick={handleDeleteTodo} className="btn trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
