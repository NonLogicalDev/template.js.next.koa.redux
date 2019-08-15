import {createAction, handleActions} from "redux-actions"

function action(name) {
    return `TODO:${name}`
}

let handlers = {}
let initialState = {
    editor: {
        title: ""
    },
    todos: [],
}

export const todoCreate = createAction(action("CREATE"),
    ({title}) => ({title}),
)
handlers[todoCreate] = (state, {payload: {title}}) => {
    return { ...state,
        todos: state.todos.concat({
            title,
        })
    }
}

export const todoUpdate = createAction(action("UPDATE"),
    ({title}) => ({title}),
)
handlers[todoUpdate] = (state, {payload: {title}}) => {
    return { ...state,
        editor: {
            title: title
        },
    }
}

export default handleActions(handlers, initialState)
