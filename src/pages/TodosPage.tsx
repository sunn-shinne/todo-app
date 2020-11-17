import React, {useEffect, useState} from 'react'
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";
import {ITodo} from "../interfaces";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos([...saved])
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string): void => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prevState => [newTodo, ...prevState])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }

    const removeHandler = (id: number): void => {
        const shouldRemove: boolean = window.confirm('Вы уверены, что хотите удалить задачу?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todos => todos.id !== id))
        }
    }

    return (
        <>
            <ToDoForm onAdd={addHandler}/>
            <ToDoList
                todos={todos}
                onRemove={removeHandler}
                onToggle={toggleHandler}
            />
        </>
    )
}