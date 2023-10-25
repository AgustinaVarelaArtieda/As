import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer1";


const rootReducer = combineReducers({
    search: searchReducer
    //aca van los otros reducers
})

export default rootReducer