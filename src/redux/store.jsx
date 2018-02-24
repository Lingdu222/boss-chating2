import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducer'
var reducerss =combineReducers(reducers)
var store=createStore(reducerss,applyMiddleware(thunk))
export default store;