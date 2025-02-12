import { useState } from "react";
import useTodos from "../hooks/useTodos";


export default function AddTodoForm(){

    const [input, setInput] = useState("");
    const addTodo = useTodos((state)=>state.addTodo);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput("");
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Write your task"
            className="border grow rounded-s-md border-gray-400 p-2"
            />
            <button 
            type="submit"
            className="rounded-e-md bg-slate-900 text-white w-16 hover:bg-slate-700"
            >
                Add
            </button>
        </form>
    )
}