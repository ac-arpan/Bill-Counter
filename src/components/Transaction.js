import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'

function Transaction( { transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)
    // console.log(deleteTransaction);
    
    return (
        <li className={ transaction.amount < 0 ? "minus" : "plus" }>
            { transaction.text } <span> { transaction.amount < 0 ? "-" : "+" } <i className="fa fa-inr"></i>{ Math.abs(transaction.amount) }</span>
            <button className="delete-btn" onClick = {() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
