import useTodos from "../hooks/useTodos";
import { Todo } from "../interface/todos"
import { Trash2 } from "lucide-react";

interface TodoItemProps{
    todo:Todo,
}

export default function TodoItem({todo}:TodoItemProps){
    const toggleTodo = useTodos((state)=>state.toggleTodo);
    const deleteTodo = useTodos((state)=>state.deleteTodo);

    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center grow gap-2 p-2 border rounded-md border-gray-400, bg-white hover:bg-slate-50">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button
            onClick={()=>deleteTodo(todo.id)} 
            className="p-2 ">
                <Trash2 size={20} className="text-grey-500" />
            </button>
        </div>
    )
}