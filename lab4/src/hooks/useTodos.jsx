import { useEffect, useState } from "react";

export function useTodos(){
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true)
            try{
                const res = await fetch('https://dummyjson.com/todos')
                if(!res.ok) throw new Error("Failed to fetch todos");
                const data = await res.json();
                setTodos(data.todos);
            } catch (err) {
                setError(err.message);
            } finally{
                setIsLoading(false)
            }
        };

        fetchTodos();
    }, []);

    const deleteTodo = async (id) => {
        try {
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "DELETE",
            });
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
        } catch (err) {
             setError(err.message);
        }
    };

    const toggleTodo = async (id) => {
        try{
            const todo = todos.find((t) => t.id === id);
            const updated = {completed: !todo.completed};

            await fetch('https://dummyjson.com/todos/${id}', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated),
            });

            setTodos((prev) => 
                prev.map((t) =>
                t.id === id ? {...t, completed: !t.completed} : t
            )
        );
        } catch (err){
            setError(err.message);
        }
    };

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            todo: text,
            completed: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    return {todos, isLoading, error, addTodo, deleteTodo, toggleTodo};
}