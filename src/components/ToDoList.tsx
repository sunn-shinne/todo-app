import React from 'react'
import {ITodo} from '../interfaces'

type PropsType = {
    todos: Array<ITodo>
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export const ToDoList: React.FC<PropsType> = (props) => {
    if (props.todos.length === 0) {
        return  (
            <p className='center flow-text grey-text'>Пока что дел нет :(</p>
        )
    }

    const onRemove = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        props.onRemove(id)
    }

    return (
        <ul>
            {props.todos.map(todo => {

                const classes = ['todo']
                if (todo.completed === true) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={props.onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className='material-icons red-text'
                                onClick={event => onRemove(event, todo.id)}>
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}