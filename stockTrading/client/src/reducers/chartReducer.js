const initialState = {
    stocks: [],
    stockData: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "TRANSFER_STOCKS":
            console.log('chart reducer')
            return {
                ...state,
                stocks: action.payload
            }
        case "HANDLE_DATA":
            console.log('handle data chart reducer')
            return {
                ...state,
                stockData: [...state.stockData, action.payload]
            }
        default:
            return state;
    }

}