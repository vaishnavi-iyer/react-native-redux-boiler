import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/example'


export default function configureStore () {
  const logger = createLogger()
  const middlewares = [thunk, logger]
  if (global.__DEV__) {
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  const enhancer = compose(
      applyMiddleware(...middlewares)
  )
    return createStore(rootReducer, enhancer)
}

