
import { createStore, applyMiddleware, combineReducers } from 'redux'
import user from './user'
import chatWith from './chat_with'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const appReducer = {
  user,
  chatWith
}
const store = createStore(
  combineReducers(appReducer),
  process.env.NODE_ENV === 'production' ? applyMiddleware(thunkMiddleware): composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default  store
