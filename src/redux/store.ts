import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import appReducer from "./appReducer"

let rootReducer = combineReducers({
	app: appReducer,
})

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.__store__ = store

export default store
