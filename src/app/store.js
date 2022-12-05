import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../pages/BooksSlice";

const store = configureStore({
  reducer: {
    booksReducer: BooksSlice,
  },
});

export default store;
