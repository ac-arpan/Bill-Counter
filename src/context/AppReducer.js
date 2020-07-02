
const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            let transactions = JSON.parse(localStorage.getItem('transactions'))
            transactions = transactions.filter(transaction => transaction.id !== action.payload)
            localStorage.setItem('transactions',JSON.stringify(transactions))
            return { 
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions : [...state.transactions, action.payload]
            }
        case 'FETCH_TRANSACTIONS':
            return {
                ...state,
                transactions : JSON.parse(action.payload)
            }
        default:
            return state
    }
}

export default AppReducer