import { configureStore, createSlice } from "@reduxjs/toolkit";

const memeSlice = createSlice({
  name: "memes",
  initialState: [],
  reducers: {
    setMemes: (state, action) => action.payload,
  },
});

export const { setMemes } = memeSlice.actions;

const store = configureStore({
  reducer: { memes: memeSlice.reducer },
});

export default store;
