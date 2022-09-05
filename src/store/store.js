import { configureStore } from "@reduxjs/toolkit";
import salaryCalculatorReducer from "../slice/salaryCalculatorSlice";

export const store = configureStore({
  reducer: {
    salaryCalculator: salaryCalculatorReducer,
  },
});
