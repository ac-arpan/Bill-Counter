import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
import CountUp from "react-countup";

function Balance() {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    // console.log(amounts);
    
    const balance = amounts.reduce((sum, item) => (sum += item), 0).toFixed(2)

    const getStyle = balance >= 0 ? {color: '#2ecc71', fontWeight:'300'} : {color : '#c0392b', fontWeight:'300'}
    const sign = balance >= 0 ? "" : "-"

    return (
        <>
            <h4>Your Balance</h4>
            
            <h1 style = {getStyle}> {sign}<i className="fa fa-inr"></i><CountUp end={Math.abs(balance) } duration={3} start={0} decimals={2}/></h1>
        </>
    )
}

export default Balance
