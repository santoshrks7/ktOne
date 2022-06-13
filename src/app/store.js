import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import api from "./middleware/api";

export default configureStore({
  reducer: { users: userReducer },
  middleware: [api],
});
