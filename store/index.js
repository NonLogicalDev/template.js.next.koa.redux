import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {createLogger} from "redux-logger"
import createThunk from 'redux-thunk'

import todo from "./reducers/todo"

const composeEnhancers = (() => { try {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} catch (e) { return compose } })()

const store = createStore(
    combineReducers({
        todo
    }),
    composeEnhancers(
        applyMiddleware(
            createThunk,
            createLogger(),
        )
    )
)

export default store

