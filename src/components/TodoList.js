import Todo from './Todo';

const TodoList = ({ filteredTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos.length ? (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              text={todo.text}
              todos={todos}
            />
          ))}
        </ul>
      ) : (
        <div>
          <p className="todo-list-message">
            It looks like your big to-do list is empty...
          </p>
          <p className="todo-list-message">Add some tasks!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
