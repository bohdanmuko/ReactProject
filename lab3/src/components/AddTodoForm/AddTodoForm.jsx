import { useState } from "react";
import "./AddTodoForm.css"

function AddTodoForm({onAddTodo}){
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        onAddTodo(input);
        setInput("");
    };
    
    return(
        <form className="form" onSubmit={handleSubmit}>
        <input className="input"
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;