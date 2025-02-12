import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";



export default function TodoList(){
    const todos = useTodos((state)=>state.todos);

    const todosSorted = todos.sort((a,b) => {
        if (a.completed === b.completed){
            return b.id-a.id;
        }
        return a.completed ? 1 : -1
    });
    return (
        <>
        <div className="space-y-2">
            {todosSorted.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
        {todos.length===0 &&(
            <p className="text-center text-sm text-gray-400">
            No todos yet. Add a new one above.
            </p>
        )}
        </>
    );
}