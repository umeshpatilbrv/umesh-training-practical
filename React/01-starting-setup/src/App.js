import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Ahmedabad",
    amount: "350000",
    date: new Date(2019, 1, 2),
  },

  {
    id: "e2",
    title: "Mumbai",
    amount: "400000",
    date: new Date(2020, 2, 4),
  },

  {
    id: "e3",
    title: "Surat",
    amount: "350000",
    date: new Date(2021, 3, 6),
  },

  {
    id: "e4",
    title: "Pune",
    amount: "400000",
    date: new Date(2021, 4, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "BRAINVIRE INFOTECH"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
