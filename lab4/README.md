## Component Tree + Data Flow Diagram
![Component Diagram](./Diagram.svg)

- App – main component; renders the title and TodoList.
- TodoList – uses useTodos() for state (todos, loading, error, CRUD, pagination, search); renders form, SearchBar, Pagination, and list of TodoItems.
- TodoItem – displays a single todo with edit, delete, and toggle buttons.
- SearchBar – filters todos based on search input.
- Pagination – controls page navigation and items per page.
- useTodos – custom hook managing API logic, state, search, and pagination.

## Used Patterns
1. Custom Hook Pattern – useTodos encapsulates data logic and side effects, separating them from UI components.
2. Container-Presenter Pattern – TodoList acts as the container (logic + data), while TodoItem, SearchBar, and Pagination are presentational components focused on UI.
3. Separation of Concerns – different responsibilities are split among components and the custom hook.
4. Single Responsibility Principle (SRP) – each component (TodoItem, SearchBar, Pagination, TodoList) has one clear responsibility.
5. Composition Pattern – the UI is built by composing smaller reusable components within TodoList.
6. Observer Pattern – components automatically update when the state in useTodos changes.