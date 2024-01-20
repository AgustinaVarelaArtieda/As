import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer1";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer
    //aca van los otros reducers
})

export default rootReducer