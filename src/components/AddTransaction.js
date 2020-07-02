import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext)

  const handleSubmit = e => {
    e.preventDefault()
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text : text ? text : 'Transaction',
      amount: amount ? parseInt(amount) : 0
    }

    //Get the transaction array 
    let transactions
    if(localStorage.getItem('transactions') === null) {
      transactions = []
    }
    else {
      transactions = JSON.parse(localStorage.getItem('transactions'))
    }

    // push the new item to the transaction array
    transactions.push(newTransaction)

    // Set the transaction array
    localStorage.setItem('transactions',JSON.stringify(transactions))

    // console.log(localStorage.getItem('transactions'));
    
    addTransaction(newTransaction)
    setText('')
    setAmount('')

  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
