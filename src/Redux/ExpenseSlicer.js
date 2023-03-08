import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //*---------------Expenses Array---------------
  expenses: [
    {
      id: "1",
      title: "Car Insurance",
      amount: "245.56",
      day: "03",
      month: "Jan",
      year: "2023",
      total: "500",
    },
    {
      id: "2",
      title: "New Phone",
      amount: "10.2",
      day: "13",
      month: "Feb",
      year: "2022",
      total: "260",
    },
    {
      id: "3",
      title: "Fruits",
      amount: "245.56",
      day: "03",
      month: "Mar",
      year: "2023",
      total: "500",
    },
    {
      id: "4",
      title: " English Courses",
      amount: "10.2",
      day: "13",
      month: "Apr",
      year: "2022",
      total: "260",
    },
    {
      id: "5",
      title: "PC",
      amount: "245.56",
      day: "03",
      month: "May",
      year: "2023",
      total: "500",
    },
    {
      id: "6",
      title: "Learn React",
      amount: "10.2",
      day: "13",
      month: "June",
      year: "2022",
      total: "260",
    },
  ],

  //*---------------Month Array---------------
  month: [
    { label: "January", value: "Jan" },
    { label: "February", value: "Feb" },
    { label: "March", value: "Mar" },
    { label: "April", value: "Apr" },
    { label: "May", value: "May" },
    { label: "June", value: "Jun" },
    { label: "July", value: "Jul" },
    { label: "August", value: "Aug" },
    { label: "September", value: "Sep" },
    { label: "October", value: "Oct" },
    { label: "November", value: "Nov" },
    { label: "December", value: "Dec" },
  ],

  //*---------------Years Array---------------
  year: [
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ],

  //*---------------Güncellemek için seçilen Item---------------
  selectedExpense: null,
};

export const expenses = createSlice({
  name: "expenses",
  initialState,

  reducers: {
    //*----------------Create Expense-------------
    addExpense: (state, actions) => {
      state.expenses = [
        {
          id: actions.payload.id,
          title: actions.payload.title,
          day: actions.payload.day,
          year: actions.payload.year,
          month: actions.payload.month,
          amount: actions.payload.amount,
          total: actions.payload.total,
        },
        ...state.expenses,
      ];
    },

    //*----------------Select Update Expense-------
    selectEditExpense: (state, action) => {
      const selectExpense = state.expenses.find(
        (expense) => expense.id === action.payload
      );

      state.selectedExpense = selectExpense;
    },

    //*----------------Update Expense-------------

    updateExpense: (state, actions) => {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === actions.payload.id
      );
      state.expenses[expenseIndex].title = actions.payload.title;
      state.expenses[expenseIndex].day = actions.payload.day;
      state.expenses[expenseIndex].month = actions.payload.month;
      state.expenses[expenseIndex].year = actions.payload.year;
      state.expenses[expenseIndex].amount = actions.payload.amount;
      state.expenses[expenseIndex].total = actions.payload.total;
      

    },

    //*----------------Remove Expense-------------
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, selectEditExpense, updateExpense, deleteExpense } =
  expenses.actions;

export default expenses.reducer;
