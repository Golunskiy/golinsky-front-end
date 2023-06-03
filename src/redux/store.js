import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, compose, createStore } from "redux"

import sneakers from "./reducers/sneakers"
import cart from "./reducers/cart"
import like from "./reducers/like"

const rootReducer = combineReducers({
   cart,
   sneakers,
   like,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store