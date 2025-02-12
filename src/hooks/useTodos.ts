import { useEffect, useState } from "react";
import { Todo } from "../interface/todos";
import { dummyData } from "../data/todos";


export default function useTodos(){
    const [todos, setTodos] = useState(()=>{
        const savedTodos: Todo[] = JSON.parse(
            localStorage.getItem("todos") || "[]"
        );
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });
    
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    function setTodoCompleted(id:number, completed:boolean){
    setTodos((prev)=>
    prev.map((todo)=> (todo.id === id ? {...todo, completed} : todo)))
    }
    function addTodo(title:string){
    setTodos((prev)=>[
        {
        id:Date.now(),
        title,
        completed:false
        },
        ...prev,
    ]);
    }

    function deleteTodo(id:number){
    setTodos((prev)=>
        prev.filter(prev => prev.id !== id)
    )
    }
    function deleteAllCompletedTodos(){
    setTodos((prev)=>prev.filter(prev=>!prev.completed))
    }

    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos,
    };
}