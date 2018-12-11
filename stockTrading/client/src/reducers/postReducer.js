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
        case "GET_MY_STOCKS":
            console.log('GET_MY_STOCKS reducer')
            return {
                ...state,
                myStocks: action.payload
            }
        default:
            return state;
    }

}