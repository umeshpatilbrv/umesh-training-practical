import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./SliceFile";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
