import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "citySlice",
  initialState: {
    city: "Madrid",
    country : "Espagne"
  },
  reducers: {
    setCity: (currentSlice, action) => {
      currentSlice.city = action.payload;
    }
  },
});

export const cityReducer = citySlice.reducer;

export const { setCity } = citySlice.actions;
