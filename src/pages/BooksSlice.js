const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: 1, title: "Allan Quatermain", author: "Sir H. Rider Haggard" },
    { id: 2, title: "The Sea Hawk", author: "Rafael Sabatini" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { showBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
