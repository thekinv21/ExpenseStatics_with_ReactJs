import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlicer from "../Redux/ExpenseSlicer";

export const store = configureStore({
  reducer: {
    Expense: ExpenseSlicer,
  },
});
