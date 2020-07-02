import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
import CountUp from 'react-countup'

function IncomeExpense() {

  const { transactions } = useContext(GlobalContext)  

  const incomes = transactions.map(transaction => ( transaction.amount > 0 ? transaction.amount : 0))
  const totalIncome = incomes.reduce((sum, item) => (sum += item), 0).toFixed(2)

  const expenses = transactions.map(transaction => ( transaction.amount < 0 ? transaction.amount : 0))
  const totalExpense = Math.abs(expenses.reduce((sum, item) => (sum += item), 0).toFixed(2))

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          + <i className="fa fa-inr"></i><CountUp end={ totalIncome } duration={3} start={0} decimals={2}/>
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p  className="money minus">
          - <i className="fa fa-inr"></i><CountUp end={ totalExpense } duration={3} start={0} decimals={2}/>
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
