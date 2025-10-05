## Component Tree + Data Flow Diagram
![Component Diagram](./diagram.svg)

- App – main component; renders the title and TodoList.
- TodoList – uses useTodos() for state (todos, isLoading, error, add/delete/toggle); renders add form and list of TodoItems.
- TodoItem – displays a single todo with delete and toggle buttons.
- useTodos – custom hook managing API logic and state (todos, isLoading, error).