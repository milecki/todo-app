const TodoForm = ({
  inputText,
  inputRef,
  setInputText,
  setPriority,
  setStatus,
  setTodos,
  todos,
}) => {
  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    setTodos([
      ...todos,
      {
        completed: false,
        id: Math.floor(Math.random() * 10000),
        priority: false,
        text: inputText,
      },
    ]);
    setInputText('');
  };

  const handleTodoStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitTodo} className="todo-form">
      <div className="todo-input-container">
        <label htmlFor="todoInput">New todo:</label>
        <div className="todo-input-and-form-button-group">
          <input
            className="todo-input"
            onChange={handleInputTextChange}
            placeholder="Add new todo..."
            type="text"
            value={inputText}
            ref={inputRef}
            id="todoInput"
          />
          <button className="todo-form-btn">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>

      <div className="select-container">
        <label htmlFor="select">Sort by:</label>
        <select
          onChange={handleTodoStatus}
          name="todos"
          className="select"
          id="select"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
