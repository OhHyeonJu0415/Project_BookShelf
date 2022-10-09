import { createSlice } from "@reduxjs/toolkit";

export const book = createSlice({
  name: "book",
  initialState: { book: "default" },
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
  },
});

export const { setBook } = book.actions;
export default book;
