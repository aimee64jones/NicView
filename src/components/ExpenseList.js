import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Coffee', 'Groceries', 'Transport'];

  return (
    <div className="list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
