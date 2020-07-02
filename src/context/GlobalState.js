import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    transactions: []
}

// Creating Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect( () => {
        fetchTransactions()
    }, [])

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function fetchTransactions() {
        dispatch({
            type: 'FETCH_TRANSACTIONS',
            payload: localStorage.getItem("transactions") ? localStorage.getItem("transactions") : '[]'
        })
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction, fetchTransactions }}>
            {children}
        </GlobalContext.Provider>
    )
}