import { create } from "zustand";
import { Todo } from "../interface/todos";
import { dummyData } from "../data/todos";
import { createJSONStorage, persist } from "zustand/middleware";

interface TodoStore{
    todos:Todo[];
    addTodo:(title:string)=>void;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
    deleteAllCompletedTodos:()=>void;
}

const useTodos = create<TodoStore>()(persist((set) => ({
    todos: dummyData,
    addTodo: (title)=> set((state)=>({
        todos:[
            {
                id:Date.now(),
                title,
                completed:false,
            },
            ...state.todos,
        ],
    })),

    toggleTodo: (id)=>set((state)=>({
        todos: state.todos.map((todo) =>
            todo.id === id ? {...todo, completed:!todo.completed} : todo
        ),
    })),

    deleteTodo: (id)=>set((state)=>({
        todos: state.todos.filter((todo)=>todo.id!=id),
    })),

    deleteAllCompletedTodos: ()=>set((state)=>({
        todos: state.todos.filter((todo)=>!todo.completed)
    })),
}),
{
    name:'todos-storage',
    storage:createJSONStorage(()=>localStorage),
}
));


export default useTodos;