import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./Slices/citySlice";

export const store = configureStore({
  reducer: {
    CITY: cityReducer,
  },
});
