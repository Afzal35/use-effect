import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES =[
  {
    id: 'e1',
    title: 'Car',
    amount: '94.2',
    date: new Date(2022 , 6 , 5)
  },
  {
    id: 'e2',
    title: 'Tv',
    amount: '540',
    date: new Date(2022 , 6 , 5)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: '125.2',
    date: new Date(2022 , 6 , 4)
  },
  {
    id: 'e4',
    title: 'Wood Table',
    amount: '156.2',
    date: new Date(2022 , 6 , 4)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
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
