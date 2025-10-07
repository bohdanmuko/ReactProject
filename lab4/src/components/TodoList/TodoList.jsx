import SearchBar from './../SearchBar/SearchBar';
import Pagination from "../Pagination/Pagination";
import TodoItem from "../TodoItem/TodoItem";
import { useTodos } from "./../../hooks/useTodos";
import "./TodoList.css";

function TodoList() {
  const {
    todos,
    isLoading,
    error,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodoTitle,
    searchTerm,
    setSearchTerm,
    currentPage,
    limitPerPage,
    totalTodos,
    goToNextPage,
    goToPrevPage,
    setLimit,
  } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todo.value.trim();
    if (!text) return;
    addTodo(text);
    e.target.reset();
  };

  if (isLoading) return <p className='loading'>Loading todos...</p>;
  if (error) return <p className='error'>Error: {error}</p>;

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input name="todo" placeholder="Enter a task..." />
        <button type="submit">Add</button>
      </form>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>

      <Pagination
        currentPage={currentPage}
        totalTodos={totalTodos}
        limitPerPage={limitPerPage}
        onNext={goToNextPage}
        onPrev={goToPrevPage}
        onLimitChange={setLimit}
      />

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className='no-results'>
            {searchTerm ? "No todos match your search" : "No todos yet"}
          </p>
        ) : (
          todos.map((t) => (
            <TodoItem
              key={t.id}
              id={t.id}
              text={t.todo}
              completed={t.completed}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
              onEdit={editTodoTitle}
            />
        ))
      )}
      </ul>
    </div>
  );
}

export default TodoList;
