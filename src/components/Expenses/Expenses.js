import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  let getSelectedYear = (selectedYear) => {
    let year = selectedYear;
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter getSelectedYear={getSelectedYear} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
