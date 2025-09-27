## Component Tree
- **App**
  - **TodoApp**
    - **state:** `todos`
    - **AddTodoForm**
      - **props:** `onAddTodo`
    - **TodoList**
      - **props:** `todos`, `onRemoveTodo`
      - **TodoItem**
        - **props:** `id`, `text`, `onRemove`
        - **state:** `completed`


## Data Flow
- TodoApp holds the state of the tasks (todos) using useState.
- AddTodoForm receives the addTodo function via the onAddTodo prop and calls it on form submit.
- TodoApp passes the removeTodo function to TodoList via the onRemoveTodo prop.
- TodoList maps over the tasks and passes each task’s id, text, and the onRemoveTodo function down to TodoItem.
- TodoItem receives the task data and the onRemove function via props and calls onRemove(id) when the Delete button is clicked.
- TodoItem also holds its own local state (completed) to toggle the checkbox.
- All global state is managed in TodoApp. Child components only trigger state changes via props.

