import React from 'react'
import {connect} from "react-redux"

import * as I from 'immutable'

import {todoCreate, todoUpdate} from "../store/reducers/todo"

let hoc = connect(
    (state) => state.todo,
    (d) => ({
        updateTodo: (todo) => d(todoUpdate({title: todo})),
        createTodo: (editor) => d(todoCreate(editor)),
    })
)

let TodoApp = ({editor, todos, updateTodo, createTodo}) => {
    let onInputChange = (e) => {
        updateTodo(e.target.value)
    }
    let onInputSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            createTodo(editor)
            updateTodo("")
        }
    }

    let todo_items = I.List(todos).map((todo, i) => {
        return <li key={i}>{todo.title}</li>
    })

    return (
        <>
            <input value={editor.title} onChange={onInputChange} onKeyPress={onInputSubmit}/>
            <ul>
                {todo_items}
            </ul>
        </>
    )
}

export default hoc(TodoApp)