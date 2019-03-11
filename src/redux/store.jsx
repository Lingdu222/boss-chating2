import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user from './reducer'
var reducerss = combineReducers(user)
var store = createStore(reducerss, applyMiddleware(thunk))
export default store;