import { FETCH_STOCKS, NEW_POST } from '../actions/types';

const initialState = {
    stocks: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_STOCKS:
            console.log('reducer')
            return {
                ...state,
                stocks: action.payload
            }

        default:
            return state;
    }

}