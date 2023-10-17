import { configureStore } from "@reduxjs/toolkit";
import validation from "./features/validation";

export const store = configureStore({
  reducer: {
    validation,
  },
});