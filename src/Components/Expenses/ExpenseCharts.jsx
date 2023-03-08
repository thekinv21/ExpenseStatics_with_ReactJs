import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";

const ExpenseCharts = () => {
  const expenses = useSelector((state) => state.Expense.expenses);
  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart width={660} height={150} data={expenses}>
          <XAxis dataKey="month" stroke="#ddd" fontSize={10} />
          <CartesianGrid stroke="#fff" strokeDasharray="1 5" />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" barSize={29} radius={5} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default ExpenseCharts;
