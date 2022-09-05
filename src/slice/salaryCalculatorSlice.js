import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salaryType: "monthly",
  monthlySalary: 25250,
  hourlySalary: 168,
  startTime: Date.now(),
  currentTime: Date.now(),
};

export const salaryCalculatorSlice = createSlice({
  name: "salaryCalculator",
  initialState,
  reducers: {
    changeSalaryType: (state, action) => {
      state.salaryType = action.payload;
    },
    changeMonthlySalary: (state, action) => {
      state.monthlySalary = action.payload;
    },
    changeHourlySalary: (state, action) => {
      state.hourlySalary = action.payload;
    },
    updateCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const {
  changeSalaryType,
  changeMonthlySalary,
  changeHourlySalary,
  updateCurrentTime,
} = salaryCalculatorSlice.actions;

export default salaryCalculatorSlice.reducer;
