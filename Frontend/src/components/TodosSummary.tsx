import useTodoStore from "../hooks/useTodos";

export default function TodosSummary() {
    const todos = useTodoStore((state)=>state.todos);
    const deleteAllCompletedTodos = useTodoStore((state)=>state.deleteAllCompletedTodos);
    const completedTodos = todos.filter(todo => todo.completed);
    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} completed.
            </p>
            {completedTodos.length > 0 &&(
                <button
                onClick={deleteAllCompletedTodos}
                className="text-red-500 hover:underline text-sm font-medium">
                    Delete all completed
                </button>
            )}
        </div>
    );
}