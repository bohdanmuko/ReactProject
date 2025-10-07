import { useEffect, useState } from "react";

export function useTodos(){
    const [allTodos, setAllTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(10);
    const [totalTodos, setTotalTodos] = useState(0);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true)
            try{
                const skip = (currentPage - 1) * limitPerPage;
                const res = await fetch(
                    `https://dummyjson.com/todos?limit=${limitPerPage}&skip=${skip}`);
                if(!res.ok) throw new Error("Failed to fetch todos");
                const data = await res.json();
                setAllTodos(data.todos);
                setTotalTodos(data.total);
            } catch (err) {
                setError(err.message);
            } finally{
                setIsLoading(false)
            }
        };

        fetchTodos();
    }, [currentPage, limitPerPage]);

    const todos = allTodos.filter((todo) =>
        todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const deleteTodo = async (id) => {
        try {
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "DELETE",
            });
            setAllTodos((prev) => prev.filter((todo) => todo.id !== id));
            setTotalTodos((prev) => prev - 1);
        } catch (err) {
             setError(err.message);
        }
    };

    const toggleTodo = async (id) => {
        try{
            const todo = allTodos.find((t) => t.id === id);
            const updated = {completed: !todo.completed};

            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated),
            });

            setAllTodos((prev) => 
                prev.map((t) =>
                t.id === id ? {...t, completed: !t.completed} : t
            )
        );
        } catch (err){
            setError(err.message);
        }
    };

    const editTodoTitle = async (id, newTitle) => {
        try{
            const updated = {todo: newTitle};

            await fetch(`https://dummyjson.com/todos/${id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updated)
            });

            setAllTodos((prev) => 
                prev.map((t) => (t.id === id ? {...t, todo: newTitle} : t))
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
        setAllTodos((prev) => [newTodo, ...prev]);
        setTotalTodos((prev) => prev + 1);
    };

    const goToNextPage = () => {
        const maxPage = Math.ceil(totalTodos/limitPerPage);
        if(currentPage < maxPage){
            setCurrentPage((prev) => prev + 1);
        }
    };

    const goToPrevPage = () => {
        if(currentPage >  1){
            setCurrentPage((prev) => prev - 1);
        }
    };

    const setLimit = (limit) => {
        setLimitPerPage(limit);
        setCurrentPage(1);
    };

    return {
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
        setLimit
    };
}