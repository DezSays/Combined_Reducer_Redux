import { combineReducers } from "redux";
import authorsReducer from "./authorsReducer"
import booksReducer from "./booksReducer"



let rootReducer = combineReducers({

    auth: authorsReducer,
    books: booksReducer

})

export default rootReducer