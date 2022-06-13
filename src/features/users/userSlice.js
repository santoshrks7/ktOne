import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    callApi: (state, action) => {},
    fromApi: (state, action) => {
      state.list = action.payload;
    },
    // getId: (state, action) => {},
  },
});

export const { callApi, fromApi } = userSlice.actions;
export default userSlice.reducer;
