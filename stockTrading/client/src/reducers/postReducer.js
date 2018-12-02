import { FETCH_STOCKS, NEW_POST } from '../actions/types';

const initialState = {
    stocks: [],
    myStocks: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_STOCKS":
            console.log('reducer fetch')
            return {
                ...state,
                stocks: action.payload
            }
        case "ADD_STOCK":
            console.log('reducer add')
            //const newArray = state.myStocks.concat(action.payload)
            return {
                ...state,
                myStocks: [...state.myStocks, action.payload]
            }
        // case "ADD_STOCK_ERROR":

        default:
            return state;
    }

}