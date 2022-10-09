import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { book } from "./modules/book.js";

const rootReducer = combineReducers({
  book: book.reducer,
});

export default configureStore({
  reducer: rootReducer,
});
