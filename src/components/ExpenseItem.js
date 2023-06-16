import React from "react"
import './ExpenseItem.css'

function ExpenseItem() {

  const expenseDate = new Date(2022,6,3)
  const expenseItem = " Car Insurance";
  const expenseAmount = 290.05;
  return (
    <div>
      <div className="expense-item">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
