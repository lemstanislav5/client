import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store;
export default store;
