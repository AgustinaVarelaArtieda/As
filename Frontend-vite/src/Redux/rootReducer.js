import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    search: searchReducer
    //aca van los otros reducers
})

export default rootReducer